import { Crypto } from './Crypto420.js';
import { CustomPresetYaml } from './ModelCustomPresetYaml.js';

export class CryptoCustomPreset {
  /**
   *  暗号化
   * @param {CustomPresetYaml} yaml addresses.yaml
   * @param {string} passwd パスワード
   * @returns void
   */
  public static encrypt(yaml: CustomPresetYaml, passwd: string): void {
    const mainPrivateKey = yaml.nodes[0].mainPrivateKey ?? '';
    const tranPrivateKey = yaml.nodes[0].transportPrivateKey ?? '';
    const remtPrivateKey = yaml.nodes[0].remotePrivateKey ?? '';
    const vrfPrivateKey = yaml.nodes[0].vrfPrivateKey ?? '';

    // チェック
    const regex = /^ENCRYPTED:/;
    const isMainEncrypted = regex.test(mainPrivateKey);
    const isTrnsEncrypted = regex.test(tranPrivateKey);
    const isRmotEncrypted = regex.test(remtPrivateKey);
    const isVrfEncrypted = regex.test(vrfPrivateKey);
    if (isMainEncrypted || isTrnsEncrypted || isRmotEncrypted || isVrfEncrypted) {
      // "ENCRYPTED:"がある
      throw new Error('Encrypted addresses.yml.');
    }

    // main
    if (CryptoCustomPreset.isEnabledItem(mainPrivateKey)) {
      yaml.nodes[0].mainPrivateKey = 'ENCRYPTED:' + Crypto.encrypt(mainPrivateKey, passwd);
    }

    // transport
    if (CryptoCustomPreset.isEnabledItem(tranPrivateKey)) {
      yaml.nodes[0].transportPrivateKey = 'ENCRYPTED:' + Crypto.encrypt(tranPrivateKey, passwd);
    }

    // remote
    if (CryptoCustomPreset.isEnabledItem(remtPrivateKey)) {
      yaml.nodes[0].remotePrivateKey = 'ENCRYPTED:' + Crypto.encrypt(remtPrivateKey, passwd);
    }

    // VRF
    if (CryptoCustomPreset.isEnabledItem(vrfPrivateKey)) {
      yaml.nodes[0].vrfPrivateKey = 'ENCRYPTED:' + Crypto.encrypt(vrfPrivateKey, passwd);
    }
  }

  /**
   *  復号化
   * @param {CustomPresetYaml} yaml addresses.yaml
   * @param {string} passwd パスワード
   * @returns {boolean} 暗号化可能か
   */
  public static tryDecrypt(yaml: CustomPresetYaml, passwd: string): boolean {
    let mainPrivateKey = yaml.nodes[0].mainPrivateKey ?? '';
    let tranPrivateKey = yaml.nodes[0].transportPrivateKey ?? '';
    let remtPrivateKey = yaml.nodes[0].remotePrivateKey ?? '';
    let vrfPrivateKey = yaml.nodes[0].vrfPrivateKey ?? '';

    // チェック
    const regex = /^ENCRYPTED:/;
    const isMainEncrypted = regex.test(mainPrivateKey);
    const isTrnsEncrypted = regex.test(tranPrivateKey);
    const isRmotEncrypted = regex.test(remtPrivateKey);
    const isVrfEncrypted = regex.test(vrfPrivateKey);
    if (!(isMainEncrypted || isTrnsEncrypted || isRmotEncrypted || isVrfEncrypted)) {
      // "ENCRYPTED:"がない
      throw new Error('Unencrypted addresses.yml.');
    }

    try {
      // main
      mainPrivateKey = mainPrivateKey.replace('ENCRYPTED:', '');
      if (CryptoCustomPreset.isEnabledItem(mainPrivateKey)) {
        yaml.nodes[0].mainPrivateKey = Crypto.decrypt(mainPrivateKey, passwd);
      }

      // transport
      tranPrivateKey = tranPrivateKey.replace('ENCRYPTED:', '');
      if (CryptoCustomPreset.isEnabledItem(tranPrivateKey)) {
        yaml.nodes[0].transportPrivateKey = Crypto.decrypt(tranPrivateKey, passwd);
      }

      // remote
      remtPrivateKey = remtPrivateKey.replace('ENCRYPTED:', '');
      if (CryptoCustomPreset.isEnabledItem(remtPrivateKey)) {
        yaml.nodes[0].remotePrivateKey = Crypto.decrypt(remtPrivateKey, passwd);
      }

      // VRF
      vrfPrivateKey = vrfPrivateKey.replace('ENCRYPTED:', '');
      if (CryptoCustomPreset.isEnabledItem(vrfPrivateKey)) {
        yaml.nodes[0].vrfPrivateKey = Crypto.decrypt(vrfPrivateKey, passwd);
      }
    } catch {
      return false;
    }

    if (
      yaml.nodes[0].mainPrivateKey !== '' ||
      yaml.nodes[0].transportPrivateKey !== '' ||
      yaml.nodes[0].remotePrivateKey !== '' ||
      yaml.nodes[0].vrfPrivateKey !== ''
    ) {
      return true;
    }

    return false;
  }

  /**
   * 無効項目判定
   * @param item {string} 項目
   * @returns true: 無効
   */
  private static isEnabledItem(item: null | string | undefined) {
    return item !== null && item !== undefined && item !== '';
  }
}
