import { Crypto420 } from './Crypto420.js';
import { AddressesYaml } from './ModelAddressesYaml.js';

export class CryptoAddresses420 {
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
      yaml.nodes[0].main.privateKey = Crypto420.decrypt(
        mainEncryptedPrivateKey,
        passwd
      );
    }

    // transport
    const transportEncryptedPrivateKey =
      yaml.nodes[0].transport?.privateKey?.replace('ENCRYPTED:', '');
    if (transportEncryptedPrivateKey !== undefined) {
      yaml.nodes[0].transport.privateKey = Crypto420.decrypt(
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
      yaml.nodes[0].remote.privateKey = Crypto420.decrypt(
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
      yaml.nodes[0].vrf.privateKey = Crypto420.decrypt(
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
        'ENCRYPTED:' + Crypto420.encrypt(mainPrivateKey, passwd);
    }

    // transport
    const transportPrivateKey = yaml.nodes[0].transport?.privateKey;
    if (transportPrivateKey !== undefined) {
      yaml.nodes[0].transport.privateKey =
        'ENCRYPTED:' + Crypto420.encrypt(transportPrivateKey, passwd);
    }

    // remote
    const remotePrivateKey = yaml.nodes[0].remote?.privateKey;
    if (remotePrivateKey !== undefined) {
      yaml.nodes[0].remote.privateKey =
        'ENCRYPTED:' + Crypto420.encrypt(remotePrivateKey, passwd);
    }

    // VRF
    const vrfPrivateKey = yaml.nodes[0].vrf?.privateKey;
    if (vrfPrivateKey !== undefined) {
      yaml.nodes[0].vrf.privateKey =
        'ENCRYPTED:' + Crypto420.encrypt(vrfPrivateKey, passwd);
    }
  }
}
