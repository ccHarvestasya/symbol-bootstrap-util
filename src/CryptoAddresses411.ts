import { Crypto411 } from './Crypto411.js';
import { AddressesYaml } from './ModelAddressesYaml.js';

export class CryptoAddresses411 {
  /**
   * addresses.yaml 復号化
   * @param {AddressesYaml} yaml addresses.yaml
   * @param {string} passwd パスワード
   * @returns void
   */
  public static decrypt(yaml: AddressesYaml, passwd: string): void {
    // main
    const mainEncryptedPrivateKey = yaml.nodes[0].main?.privateKey?.replace(
      'ENCRYPTED:',
      ''
    );
    if (mainEncryptedPrivateKey !== undefined) {
      yaml.nodes[0].main.privateKey = Crypto411.decrypt(
        mainEncryptedPrivateKey,
        passwd
      );
    }

    // transport
    const transportEncryptedPrivateKey =
      yaml.nodes[0].transport?.privateKey?.replace('ENCRYPTED:', '');
    if (transportEncryptedPrivateKey !== undefined) {
      yaml.nodes[0].transport.privateKey = Crypto411.decrypt(
        transportEncryptedPrivateKey,
        passwd
      );
    }

    // remote
    const remoteEncryptedPrivateKey = yaml.nodes[0].remote?.privateKey?.replace(
      'ENCRYPTED:',
      ''
    );
    if (remoteEncryptedPrivateKey !== undefined) {
      yaml.nodes[0].remote.privateKey = Crypto411.decrypt(
        remoteEncryptedPrivateKey,
        passwd
      );
    }

    // VRF
    const vrfEncryptedPrivateKey = yaml.nodes[0].vrf?.privateKey?.replace(
      'ENCRYPTED:',
      ''
    );
    if (vrfEncryptedPrivateKey !== undefined) {
      yaml.nodes[0].vrf.privateKey = Crypto411.decrypt(
        vrfEncryptedPrivateKey,
        passwd
      );
    }
  }

  /**
   * addresses.yaml 暗号化
   * @param {AddressesYaml} yaml addresses.yaml
   * @param {string} passwd パスワード
   * @returns void
   */
  public static encrypt(yaml: AddressesYaml, passwd: string): void {
    // main
    const mainPrivateKey = yaml.nodes[0].main?.privateKey;
    if (mainPrivateKey !== undefined) {
      yaml.nodes[0].main.privateKey =
        'ENCRYPTED:' + Crypto411.encrypt(mainPrivateKey, passwd);
    }

    // transport
    const transportPrivateKey = yaml.nodes[0].transport?.privateKey;
    if (transportPrivateKey !== undefined) {
      yaml.nodes[0].transport.privateKey =
        'ENCRYPTED:' + Crypto411.encrypt(transportPrivateKey, passwd);
    }

    // remote
    const remotePrivateKey = yaml.nodes[0].remote?.privateKey;
    if (remotePrivateKey !== undefined) {
      yaml.nodes[0].remote.privateKey =
        'ENCRYPTED:' + Crypto411.encrypt(remotePrivateKey, passwd);
    }

    // VRF
    const vrfPrivateKey = yaml.nodes[0].vrf?.privateKey;
    if (vrfPrivateKey !== undefined) {
      yaml.nodes[0].vrf.privateKey =
        'ENCRYPTED:' + Crypto411.encrypt(vrfPrivateKey, passwd);
    }
  }
}
