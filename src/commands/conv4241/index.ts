import password from '@inquirer/password';
import { Command, Flags } from '@oclif/core';
import { dump, load } from 'js-yaml';
import fs from 'node:fs';

import { CryptoAddresses411 } from '../../CryptoAddresses411.js';
import { CryptoAddresses420 } from '../../CryptoAddresses420.js';
import { AddressesYaml } from '../../ModelAddressesYaml.js';

export default class Conv4241 extends Command {
  static description =
    'Convert addresses.yml encrypted with version 4.2.x to 4.1.x.';

  static examples = [
    `$ symbol-bootstrap-util conv4241 -i addresses_42.yml -o addresses_41.yml`,
  ];

  static flags = {
    in: Flags.string({
      char: 'i',
      description: 'input encrypted with version 4.2.x addresses.yml',
      required: true,
    }),
    out: Flags.string({
      char: 'o',
      description: 'output encrypted with version 4.1.x addresses.yml',
      required: true,
    }),
  };

  async run(): Promise<void> {
    this.log('Convert addresses.yml encrypted with version 4.2.x to 4.1.x.');

    const { flags } = await this.parse(Conv4241);

    // パスワード入力要求
    const passwd = await password({ mask: true, message: 'enter password' });

    try {
      // ファイル読み込みオブジェクト化
      const data = fs.readFileSync(flags.in, 'utf8');
      const yaml = load(data) as AddressesYaml;

      // 復号化
      CryptoAddresses420.decrypt(yaml, passwd);
      // 暗号化
      CryptoAddresses411.encrypt(yaml, passwd);

      // ファイル出力
      fs.writeFileSync(flags.out, dump(yaml));
      console.log(`Write to ${flags.out}`);
    } catch {
      // エラー処理
      console.log('Failed decryption.');
    }
  }
}
