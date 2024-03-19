import password from '@inquirer/password';
import { Command, Flags } from '@oclif/core';
import { dump, load } from 'js-yaml';
import fs from 'node:fs';

import { CryptoAddresses420 } from '../../CryptoAddresses420.js';
import { AddressesYaml } from '../../ModelAddressesYaml.js';

export default class Dec42 extends Command {
  static description = 'Decrypt addresses.yml in version 4.2.x.';

  static examples = [
    `$ symbol-bootstrap-util dec42 -i addresses_enc.yml -o addresses_dec.yml`,
  ];

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
    this.log('Decrypt addresses.yml in version 4.2.x.');

    const { flags } = await this.parse(Dec42);

    // パスワード入力要求
    const passwd = await password({ mask: true, message: 'enter password' });

    try {
      // ファイル読み込みオブジェクト化
      const data = fs.readFileSync(flags.in, 'utf8');
      const yaml = load(data) as AddressesYaml;

      // 復号化
      CryptoAddresses420.decrypt(yaml, passwd);

      // ファイル出力
      fs.writeFileSync(flags.out, dump(yaml));
      console.log(`Write to ${flags.out}`);
    } catch {
      // エラー処理
      console.log('Failed decryption.');
    }
  }
}
