import password from '@inquirer/password';
import { Command, Flags } from '@oclif/core';
import { dump, load } from 'js-yaml';
import fs from 'node:fs';

import { CryptoAddresses411 } from '../../CryptoAddresses411.js';
import { AddressesYaml } from '../../ModelAddressesYaml.js';

export default class Dec41 extends Command {
  static description = 'Decrypt addresses.yml in version 4.1.x.';

  static examples = [`$ symbol-bootstrap-util dec41 -i addresses_enc.yml -o addresses_dec.yml`];

  static flags = {
    in: Flags.string({
      char: 'i',
      description: 'input encrypted addresses.yml',
      required: true,
    }),
    out: Flags.string({
      char: 'o',
      description: 'output decryption addresses.yml',
      required: true,
    }),
  };

  async run(): Promise<void> {
    this.log(Dec41.description);

    const { flags } = await this.parse(Dec41);

    try {
      // ファイル読み込みオブジェクト化
      const data = fs.readFileSync(flags.in, { encoding: 'utf8', flag: 'r' });
      const yaml = load(data) as AddressesYaml;

      // パスワード入力要求
      const passwd = await password({ mask: true, message: 'enter password' });

      // 復号化
      CryptoAddresses411.tryDecrypt(yaml, passwd);

      // ファイル出力
      fs.writeFileSync(flags.out, dump(yaml), { encoding: 'utf8', flag: 'w' });
      console.log(`Write to ${flags.out}`);
    } catch (error) {
      // エラー処理
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}
