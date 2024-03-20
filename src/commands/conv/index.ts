import password from '@inquirer/password';
import { Command, Flags } from '@oclif/core';
import { dump, load } from 'js-yaml';
import fs from 'node:fs';

import { CryptoAddresses411 } from '../../CryptoAddresses411.js';
import { CryptoAddresses420 } from '../../CryptoAddresses420.js';
import { AddressesYaml } from '../../ModelAddressesYaml.js';

export default class Conv extends Command {
  static description = 'Convert encrypted version of address.yml between 4.1.x and 4.2.x.';

  static examples = [`$ symbol-bootstrap-util conv -i addresses_bef.yml -o addresses_aft.yml`];

  static flags = {
    in: Flags.string({
      char: 'i',
      description: 'input encrypted addresses.yml',
      required: true,
    }),
    out: Flags.string({
      char: 'o',
      description: 'output encrypted addresses.yml',
      required: true,
    }),
  };

  async run(): Promise<void> {
    this.log(Conv.description);

    const { flags } = await this.parse(Conv);

    try {
      // ファイル読み込み
      const data = fs.readFileSync(flags.in, { encoding: 'utf8', flag: 'r' });

      // パスワード入力要求
      const passwd = await password({ mask: true, message: 'enter password' });

      // 4.1復号化
      let yaml = load(data) as AddressesYaml;
      if (CryptoAddresses411.tryDecrypt(yaml, passwd)) {
        console.log('Convert v4.1.x => v4.2.x');
        // 4.2暗号化
        CryptoAddresses420.encrypt(yaml, passwd);
      } else {
        console.log('Convert v4.2.x => v4.1.x');
        // 4.2復号化
        yaml = load(data) as AddressesYaml;
        CryptoAddresses420.tryDecrypt(yaml, passwd);
        // 4.1暗号化
        CryptoAddresses411.encrypt(yaml, passwd);
      }

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
