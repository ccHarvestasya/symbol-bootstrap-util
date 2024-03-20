import { Crypto } from './Crypto420.js';
import { AddressesYaml } from './ModelAddressesYaml.js';

export class CryptoAddresses420 {
  /**
   * addresses.yaml 暗号化
   * @param {AddressesYaml} yaml addresses.yaml
   * @param {string} passwd パスワード
   * @returns void
   */
  public static encrypt(yaml: AddressesYaml, passwd: string): void {
    const mainPrivateKey = yaml.nodes[0].main?.privateKey ?? '';
    const tranPrivateKey = yaml.nodes[0].transport?.privateKey ?? '';
    const remtPrivateKey = yaml.nodes[0].remote?.privateKey ?? '';
    const vrfPrivateKey = yaml.nodes[0].vrf?.privateKey ?? '';

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
    if (mainPrivateKey !== undefined && mainPrivateKey !== '') {
      yaml.nodes[0].main.privateKey = 'ENCRYPTED:' + Crypto.encrypt(mainPrivateKey, passwd);
    }

    // transport
    if (tranPrivateKey !== undefined && tranPrivateKey !== '') {
      yaml.nodes[0].transport.privateKey = 'ENCRYPTED:' + Crypto.encrypt(tranPrivateKey, passwd);
    }

    // remote
    if (remtPrivateKey !== undefined && remtPrivateKey !== '') {
      yaml.nodes[0].remote.privateKey = 'ENCRYPTED:' + Crypto.encrypt(remtPrivateKey, passwd);
    }

    // VRF
    if (vrfPrivateKey !== undefined && vrfPrivateKey !== '') {
      yaml.nodes[0].vrf.privateKey = 'ENCRYPTED:' + Crypto.encrypt(vrfPrivateKey, passwd);
    }
  }

  /**
   * addresses.yaml 復号化
   * @param {AddressesYaml} yaml addresses.yaml
   * @param {string} passwd パスワード
   * @returns {boolean} 暗号化可能か
   */
  public static tryDecrypt(yaml: AddressesYaml, passwd: string): boolean {
    let mainPrivateKey = yaml.nodes[0].main?.privateKey ?? '';
    let tranPrivateKey = yaml.nodes[0].transport?.privateKey ?? '';
    let remtPrivateKey = yaml.nodes[0].remote?.privateKey ?? '';
    let vrfPrivateKey = yaml.nodes[0].vrf?.privateKey ?? '';

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

    // main
    mainPrivateKey = mainPrivateKey.replace('ENCRYPTED:', '');
    if (mainPrivateKey !== undefined) {
      yaml.nodes[0].main.privateKey = Crypto.decrypt(mainPrivateKey, passwd);
    }

    // transport
    tranPrivateKey = tranPrivateKey.replace('ENCRYPTED:', '');
    if (tranPrivateKey !== undefined) {
      yaml.nodes[0].transport.privateKey = Crypto.decrypt(tranPrivateKey, passwd);
    }

    // remote
    remtPrivateKey = remtPrivateKey.replace('ENCRYPTED:', '');
    if (remtPrivateKey !== undefined) {
      yaml.nodes[0].remote.privateKey = Crypto.decrypt(remtPrivateKey, passwd);
    }

    // VRF
    vrfPrivateKey = vrfPrivateKey.replace('ENCRYPTED:', '');
    if (vrfPrivateKey !== undefined) {
      yaml.nodes[0].vrf.privateKey = Crypto.decrypt(vrfPrivateKey, passwd);
    }

    if (
      yaml.nodes[0].main.privateKey !== '' ||
      yaml.nodes[0].transport.privateKey !== '' ||
      yaml.nodes[0].remote.privateKey !== '' ||
      yaml.nodes[0].vrf.privateKey !== ''
    ) {
      return true;
    }

    return false;
  }
}
