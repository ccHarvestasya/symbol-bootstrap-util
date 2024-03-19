import password from '@inquirer/password';
import { Command, Flags } from '@oclif/core';
import { dump, load } from 'js-yaml';
import fs from 'node:fs';

import { CryptoAddresses420 } from '../../CryptoAddresses420.js';
import { AddressesYaml } from '../../ModelAddressesYaml.js';

export default class Enc42 extends Command {
  static description = 'Encrypt addresses.yml in version 4.2.x.';

  static examples = [
    `$ symbol-bootstrap-util enc42 -i addresses_dec.yml -o addresses_enc.yml`,
  ];

  static flags = {
    in: Flags.string({
      char: 'i',
      description: 'input decrypted addresses.yml',
      required: true,
    }),
    out: Flags.string({
      char: 'o',
      description: 'output encryption addresses.yml',
      required: true,
    }),
  };

  async run(): Promise<void> {
    this.log('Encrypt addresses.yml in version 4.2.x.');

    const { flags } = await this.parse(Enc42);

    // パスワード入力要求
    const passwd = await password({ mask: true, message: 'enter password' });

    try {
      // ファイル読み込みオブジェクト化
      const data = fs.readFileSync(flags.in, 'utf8');
      const yaml = load(data) as AddressesYaml;

      // 暗号化
      CryptoAddresses420.encrypt(yaml, passwd);

      // ファイル出力
      fs.writeFileSync(flags.out, dump(yaml));
      console.log(`Write to ${flags.out}`);
    } catch {
      // エラー処理
      console.log('Failed encryption.');
    }
  }
}