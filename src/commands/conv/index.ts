import password from '@inquirer/password';
import { Command, Flags } from '@oclif/core';
import { dump, load } from 'js-yaml';
import fs from 'node:fs';

import { CryptoAddresses as CryptoAddresses411 } from '../../CryptoAddresses411.js';
import { CryptoAddresses as CryptoAddresses420 } from '../../CryptoAddresses420.js';
import { CryptoCustomPreset as CryptoCustomPreset411 } from '../../CryptoCustomPreset411.js';
import { CryptoCustomPreset as CryptoCustomPreset420 } from '../../CryptoCustomPreset420.js';
import { AddressesYaml } from '../../ModelAddressesYaml.js';
import { CustomPresetYaml } from '../../ModelCustomPresetYaml.js';
import { YamlUtil } from '../../YamlUtil.js';

export default class Conv extends Command {
  static description = 'Convert the encryption version of custom-preset.yml or address.yml.';

  static examples = [
    `$ symbol-bootstrap-util conv -i custom-preset.yml.bak -o custom-preset.yml`,
    `$ symbol-bootstrap-util conv -i target/addresses.yml.bak -o target/addresses.yml`,
  ];

  static flags = {
    in: Flags.string({
      char: 'i',
      description: 'input the encrypted custom-preset.yml or addresses.yml',
      required: true,
    }),
    out: Flags.string({
      char: 'o',
      description: 'output the encrypted custom-preset.yml or addresses.yml',
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
      const passwd = await password({ mask: true, message: 'enter password:' });

      // ファイル判定
      let yaml: AddressesYaml | CustomPresetYaml;
      if (YamlUtil.isAddresses(data)) {
        // addresses.yml
        // 4.1復号化
        let addressesYaml = load(data) as AddressesYaml;
        if (CryptoAddresses411.tryDecrypt(addressesYaml, passwd)) {
          console.log('Convert the encryption version of addresses.yml: v4.1.x => v4.2.x');
          // 4.2暗号化
          CryptoAddresses420.encrypt(addressesYaml, passwd);
        } else {
          console.log('Convert the encryption version of addresses.yml: v4.2.x => v4.1.x');
          // 4.2復号化
          addressesYaml = load(data) as AddressesYaml;
          CryptoAddresses420.tryDecrypt(addressesYaml, passwd);
          // 4.1暗号化
          CryptoAddresses411.encrypt(addressesYaml, passwd);
        }

        yaml = addressesYaml;
      } else {
        // custom-preset.yml
        // 4.1復号化
        let customPresetYaml = load(data) as CustomPresetYaml;
        if (CryptoCustomPreset411.tryDecrypt(customPresetYaml, passwd)) {
          console.log('Convert the encryption version of custom-preset.yml: v4.1.x => v4.2.x');
          // 4.2暗号化
          CryptoCustomPreset420.encrypt(customPresetYaml, passwd);
        } else {
          console.log('Convert the encryption version of custom-preset.yml: v4.2.x => v4.1.x');
          // 4.2復号化
          customPresetYaml = load(data) as CustomPresetYaml;
          CryptoCustomPreset420.tryDecrypt(customPresetYaml, passwd);
          // 4.1暗号化
          CryptoCustomPreset411.encrypt(customPresetYaml, passwd);
        }

        yaml = customPresetYaml;
      }

      // ファイル出力
      fs.writeFileSync(flags.out, dump(yaml), { encoding: 'utf8', flag: 'w' });
      console.log(`Write to ${flags.out}`);
    } catch (error) {
      // エラー処理
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      }
    }
  }
}