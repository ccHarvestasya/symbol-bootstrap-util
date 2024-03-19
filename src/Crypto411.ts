import CryptoJS411 from 'crypto-js411';

export class Crypto411 {
  /**
   * Encrypt data
   * @param {string} data data
   * @param {string} password password
   * @return {string} encrypt string
   */
  public static decrypt(data: string, password: string): string {
    const salt = CryptoJS411.enc.Hex.parse(data.slice(0, 32));
    const iv = CryptoJS411.enc.Hex.parse(data.slice(32, 64));
    const encrypted = data.slice(64);

    // generate password based key
    const key = CryptoJS411.PBKDF2(password, salt, {
      iterations: 1024,
      keySize: 8,
    });

    // decrypt using custom IV
    const decrypted = CryptoJS411.AES.decrypt(encrypted, key, {
      iv,
      mode: CryptoJS411.mode.CBC,
      padding: CryptoJS411.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS411.enc.Utf8);
  }

  /**
   * Encrypt data
   * @param {string} data data
   * @param {string} password password
   * @return {string} decrypt string
   */
  public static encrypt(data: string, password: string): string {
    const salt = CryptoJS411.lib.WordArray.random(16);

    // generate password based key
    const key = CryptoJS411.PBKDF2(password, salt, {
      iterations: 1024,
      keySize: 8,
    });

    // encrypt using random IV
    const iv = CryptoJS411.lib.WordArray.random(16);
    const encrypted = CryptoJS411.AES.encrypt(data, key, {
      iv,
      mode: CryptoJS411.mode.CBC,
      padding: CryptoJS411.pad.Pkcs7,
    });

    // salt (16 bytes) + iv (16 bytes)
    // prepend them to the ciphertext for use in decryption
    return salt.toString() + iv.toString() + encrypted.toString();
  }
}
