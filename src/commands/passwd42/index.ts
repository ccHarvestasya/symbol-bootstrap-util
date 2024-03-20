import password from '@inquirer/password';
import { Command, Flags } from '@oclif/core';
import { dump, load } from 'js-yaml';
import fs from 'node:fs';

import { CryptoAddresses420 } from '../../CryptoAddresses420.js';
import { AddressesYaml } from '../../ModelAddressesYaml.js';

export default class Passwd42 extends Command {
  static description = 'Change password in encrypted addresses.yml in version 4.2.x.';

  static examples = [
    `$ symbol-bootstrap-util passwd42 -i addresses_current.yml -o addresses_new.yml`,
  ];

  static flags = {
    in: Flags.string({
      char: 'i',
      description: 'input encrypted with version 4.2.x addresses.yml',
      required: true,
    }),
    out: Flags.string({
      char: 'o',
      description: 'output encrypted with version 4.2.x addresses.yml',
      required: true,
    }),
  };

  async run(): Promise<void> {
    this.log(Passwd42.description);

    const { flags } = await this.parse(Passwd42);

    try {
      // ファイル読み込みオブジェクト化
      const data = fs.readFileSync(flags.in, { encoding: 'utf8', flag: 'r' });
      const yaml = load(data) as AddressesYaml;

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

      // 復号化
      CryptoAddresses420.tryDecrypt(yaml, currentPasswd);
      // 暗号化
      CryptoAddresses420.encrypt(yaml, newPasswd);

      // ファイル出力
      fs.writeFileSync(flags.out, dump(yaml), { encoding: 'utf8', flag: 'w' });
      console.log(`Write to ${flags.out}`);
    } catch {
      // エラー処理
      console.log('Failed decryption.');
    }
  }
}
