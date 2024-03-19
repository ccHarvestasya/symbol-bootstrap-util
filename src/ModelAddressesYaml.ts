export type AddressesYaml = {
  nemesisGenerationHashSeed: string;
  networkType: number;
  nodes: [
    {
      friendlyName: string;
      main: {
        address: string;
        privateKey?: string;
        publicKey: string;
      };
      name: string;
      remote: {
        address: string;
        privateKey?: string;
        publicKey: string;
      };
      roles: string;
      transport: {
        address: string;
        privateKey?: string;
        publicKey: string;
      };
      vrf: {
        address: string;
        privateKey?: string;
        publicKey: string;
      };
    }
  ];
  version: number;
};
