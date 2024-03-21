import { load } from 'js-yaml';

import { AddressesYaml } from './ModelAddressesYaml.js';

export const YamlUtil = {
  isAddresses(data: string) {
    const addressesYaml = load(data) as AddressesYaml;
    if (
      addressesYaml.nodes[0].main?.privateKey !== undefined ||
      addressesYaml.nodes[0].transport?.privateKey !== undefined ||
      addressesYaml.nodes[0].remote?.privateKey !== undefined ||
      addressesYaml.nodes[0].vrf?.privateKey !== undefined
    ) {
      return true;
    }

    return false;
  },
};
