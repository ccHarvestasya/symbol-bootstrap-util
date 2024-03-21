import password from '@inquirer/password';
import { Command, Flags } from '@oclif/core';
import { dump, load } from 'js-yaml';
import fs from 'node:fs';

import { CryptoAddresses } from '../../CryptoAddresses420.js';
import { CryptoCustomPreset } from '../../CryptoCustomPreset420.js';
import { AddressesYaml } from '../../ModelAddressesYaml.js';
import { CustomPresetYaml } from '../../ModelCustomPresetYaml.js';
import { YamlUtil } from '../../YamlUtil.js';

export default class Enc41 extends Command {
  static description = 'Encrypt addresses.yml in version 4.2.x.';

  static examples = [`$ symbol-bootstrap-util enc41 -i addresses_dec.yml -o addresses_enc.yml`];

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
    this.log(Enc41.description);

    const { flags } = await this.parse(Enc41);

    try {
      // ファイル読み込みオブジェクト化
      const data = fs.readFileSync(flags.in, { encoding: 'utf8', flag: 'r' });

      // パスワード入力要求
      const passwd = await password({ mask: true, message: 'enter password' });

      // ファイル判定
      let yaml: AddressesYaml | CustomPresetYaml;
      if (YamlUtil.isAddresses(data)) {
        // addresses.yml
        console.log('Encrypt addresses.yml: v4.2.x');
        // 4.2暗号化
        const addressesYaml = load(data) as AddressesYaml;
        CryptoAddresses.encrypt(addressesYaml, passwd);
        yaml = addressesYaml;
      } else {
        // custom-preset.yml
        console.log('Encrypt custom-preset.yml: v4.2.x');
        // 4.2暗号化
        const customPresetYaml = load(data) as CustomPresetYaml;
        CryptoCustomPreset.encrypt(customPresetYaml, passwd);

        yaml = customPresetYaml;
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
