import password from '@inquirer/password';
import { Command, Flags } from '@oclif/core';
import { dump, load } from 'js-yaml';
import fs from 'node:fs';

import { CryptoAddresses411 } from '../../CryptoAddresses411.js';
import { CryptoAddresses420 } from '../../CryptoAddresses420.js';
import { AddressesYaml } from '../../ModelAddressesYaml.js';

export default class Passwd extends Command {
  static description = 'Change password in encrypted addresses.yml';

  static examples = [
    `$ symbol-bootstrap-util passwd41 -i addresses_current.yml -o addresses_new.yml`,
  ];

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
    this.log(Passwd.description);

    const { flags } = await this.parse(Passwd);

    try {
      // ファイル読み込み
      const data = fs.readFileSync(flags.in, { encoding: 'utf8', flag: 'r' });

      // 現在のパスワード入力要求
      const currentPasswd = await password({
        mask: true,
        message: 'enter current password',
      });
      // 新しいパスワード入力要求
      const newPasswd = await password({
        mask: true,
        message: 'enter new password',
      });

      // 4.1復号化
      let yaml = load(data) as AddressesYaml;
      if (CryptoAddresses411.tryDecrypt(yaml, currentPasswd)) {
        console.log('Change password v4.1.x');
        // 4.1暗号化
        CryptoAddresses411.encrypt(yaml, newPasswd);
      } else {
        console.log('Change password v4.2.x');
        // 4.2復号化
        yaml = load(data) as AddressesYaml;
        CryptoAddresses420.tryDecrypt(yaml, currentPasswd);
        // 4.2暗号化
        CryptoAddresses420.encrypt(yaml, newPasswd);
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
