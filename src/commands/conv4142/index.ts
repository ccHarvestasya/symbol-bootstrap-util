import password from '@inquirer/password';
import { Command, Flags } from '@oclif/core';
import { dump, load } from 'js-yaml';
import fs from 'node:fs';

import { CryptoAddresses411 } from '../../CryptoAddresses411.js';
import { CryptoAddresses420 } from '../../CryptoAddresses420.js';
import { AddressesYaml } from '../../ModelAddressesYaml.js';

export default class Conv4142 extends Command {
  static description = 'Convert addresses.yml encrypted with version 4.1.x to 4.2.x.';

  static examples = [`$ symbol-bootstrap-util conv4142 -i addresses_41.yml -o addresses_42.yml`];

  static flags = {
    in: Flags.string({
      char: 'i',
      description: 'input encrypted with version 4.1.x addresses.yml',
      required: true,
    }),
    out: Flags.string({
      char: 'o',
      description: 'output encrypted with version 4.2.x addresses.yml',
      required: true,
    }),
  };

  async run(): Promise<void> {
    this.log(Conv4142.description);

    const { flags } = await this.parse(Conv4142);

    try {
      // ファイル読み込みオブジェクト化
      const data = fs.readFileSync(flags.in, { encoding: 'utf8', flag: 'r' });
      const yaml = load(data) as AddressesYaml;

      // パスワード入力要求
      const passwd = await password({ mask: true, message: 'enter password' });

      // 復号化
      CryptoAddresses411.tryDecrypt(yaml, passwd);
      // 暗号化
      CryptoAddresses420.encrypt(yaml, passwd);

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
