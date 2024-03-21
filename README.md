# symbol-bootstrap-util

utilities for symbol-bootstrap

## Usage

<!-- usage -->

```sh-session
$ npm install -g symbol-bootstrap-util
$ symbol-bootstrap-util COMMAND
running command...
$ symbol-bootstrap-util (--version)
symbol-bootstrap-util/1.0.3 win32-x64 node-v18.19.1
$ symbol-bootstrap-util --help [COMMAND]
USAGE
  $ symbol-bootstrap-util COMMAND
...
```

<!-- usagestop -->

## Commands

<!-- commands -->

- [`symbol-bootstrap-util conv`](#symbol-bootstrap-util-conv)
- [`symbol-bootstrap-util dec`](#symbol-bootstrap-util-dec)
- [`symbol-bootstrap-util enc41`](#symbol-bootstrap-util-enc41)
- [`symbol-bootstrap-util enc42`](#symbol-bootstrap-util-enc42)
- [`symbol-bootstrap-util help [COMMAND]`](#symbol-bootstrap-util-help-command)
- [`symbol-bootstrap-util passwd`](#symbol-bootstrap-util-passwd)

## `symbol-bootstrap-util conv`

Convert the encryption version of custom-preset.yml or address.yml.

```
USAGE
  $ symbol-bootstrap-util conv -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input the encrypted custom-preset.yml or addresses.yml
  -o, --out=<value>  (required) output the encrypted custom-preset.yml or addresses.yml

DESCRIPTION
  Convert the encryption version of custom-preset.yml or address.yml.

EXAMPLES
  $ symbol-bootstrap-util conv -i custom-preset.yml.bak -o custom-preset.yml

  $ symbol-bootstrap-util conv -i target/addresses.yml.bak -o target/addresses.yml
```

_See code: [src/commands/conv/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.3/src/commands/conv/index.ts)_

## `symbol-bootstrap-util dec`

Decrypt the encrypted custom-preset.yml or address.yml.

```
USAGE
  $ symbol-bootstrap-util dec -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input the encrypted custom-preset.yml or addresses.yml
  -o, --out=<value>  (required) output the decrypted custom-preset.yml or addresses.yml

DESCRIPTION
  Decrypt the encrypted custom-preset.yml or address.yml.

EXAMPLES
  $ symbol-bootstrap-util dec -i custom-preset.yml -o plan-custom-preset.yml

  $ symbol-bootstrap-util dec -i target/addresses.yml -o plain-addresses.yml
```

_See code: [src/commands/dec/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.3/src/commands/dec/index.ts)_

## `symbol-bootstrap-util enc41`

Encrypt addresses.yml in version 4.1.x.

```
USAGE
  $ symbol-bootstrap-util enc41 -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input decrypted addresses.yml
  -o, --out=<value>  (required) output encryption addresses.yml

DESCRIPTION
  Encrypt addresses.yml in version 4.1.x.

EXAMPLES
  $ symbol-bootstrap-util enc41 -i addresses_dec.yml -o addresses_enc.yml
```

_See code: [src/commands/enc41/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.3/src/commands/enc41/index.ts)_

## `symbol-bootstrap-util enc42`

Encrypt addresses.yml in version 4.2.x.

```
USAGE
  $ symbol-bootstrap-util enc42 -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input decrypted addresses.yml
  -o, --out=<value>  (required) output encryption addresses.yml

DESCRIPTION
  Encrypt addresses.yml in version 4.2.x.

EXAMPLES
  $ symbol-bootstrap-util enc42 -i addresses_dec.yml -o addresses_enc.yml
```

_See code: [src/commands/enc42/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.3/src/commands/enc42/index.ts)_

## `symbol-bootstrap-util help [COMMAND]`

Display help for symbol-bootstrap-util.

```
USAGE
  $ symbol-bootstrap-util help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for symbol-bootstrap-util.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.18/src/commands/help.ts)_

## `symbol-bootstrap-util passwd`

Change password in encrypted custom-preset.yml or addresses.yml

```
USAGE
  $ symbol-bootstrap-util passwd -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input the encrypted custom-preset.yml or addresses.yml
  -o, --out=<value>  (required) output the encrypted custom-preset.yml or addresses.yml

DESCRIPTION
  Change password in encrypted custom-preset.yml or addresses.yml

EXAMPLES
  $ symbol-bootstrap-util passwd -i custom-preset.yml.bak -o custom-preset.yml

  $ symbol-bootstrap-util passwd -i target/addresses.yml.bak -o target/addresses.yml
```

_See code: [src/commands/passwd/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.3/src/commands/passwd/index.ts)_

<!-- commandsstop -->
