export type CustomPresetYaml = {
  assembly?: string;
  httpsProxies?: [{ excludeDockerService: boolean }];
  nodes: [
    {
      friendlyName?: string;
      host?: string;
      mainPrivateKey?: string;
      remotePrivateKey?: string;
      transportPrivateKey?: string;
      voting?: boolean;
      vrfPrivateKey?: string;
    }
  ];
  preset?: string;
  privateKeySecurityMode?: string;
};
