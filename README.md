# symbol-bootstrap-util

utilities for symbol-bootstrap

## Usage

<!-- usage -->
```sh-session
$ npm install -g symbol-bootstrap-util
$ symbol-bootstrap-util COMMAND
running command...
$ symbol-bootstrap-util (--version)
symbol-bootstrap-util/1.0.1 win32-x64 node-v18.19.1
$ symbol-bootstrap-util --help [COMMAND]
USAGE
  $ symbol-bootstrap-util COMMAND
...
```
<!-- usagestop -->

```sh-session
$ npm install -g symbol-bootstrap-util
$ symbol-bootstrap-util COMMAND
running command...
$ symbol-bootstrap-util (--version)
symbol-bootstrap-util/1.0.0 win32-x64 node-v18.19.1
$ symbol-bootstrap-util --help [COMMAND]
USAGE
  $ symbol-bootstrap-util COMMAND
...
```

## Commands

<!-- commands -->
* [`symbol-bootstrap-util conv`](#symbol-bootstrap-util-conv)
* [`symbol-bootstrap-util conv4142`](#symbol-bootstrap-util-conv4142)
* [`symbol-bootstrap-util conv4241`](#symbol-bootstrap-util-conv4241)
* [`symbol-bootstrap-util dec41`](#symbol-bootstrap-util-dec41)
* [`symbol-bootstrap-util dec42`](#symbol-bootstrap-util-dec42)
* [`symbol-bootstrap-util enc41`](#symbol-bootstrap-util-enc41)
* [`symbol-bootstrap-util enc42`](#symbol-bootstrap-util-enc42)
* [`symbol-bootstrap-util help [COMMAND]`](#symbol-bootstrap-util-help-command)
* [`symbol-bootstrap-util passwd`](#symbol-bootstrap-util-passwd)
* [`symbol-bootstrap-util passwd41`](#symbol-bootstrap-util-passwd41)
* [`symbol-bootstrap-util passwd42`](#symbol-bootstrap-util-passwd42)

## `symbol-bootstrap-util conv`

Convert encrypted version of address.yml between 4.1.x and 4.2.x.

```
USAGE
  $ symbol-bootstrap-util conv -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input encrypted addresses.yml
  -o, --out=<value>  (required) output encrypted addresses.yml

DESCRIPTION
  Convert encrypted version of address.yml between 4.1.x and 4.2.x.

EXAMPLES
  $ symbol-bootstrap-util conv -i addresses_bef.yml -o addresses_aft.yml
```

_See code: [src/commands/conv/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/conv/index.ts)_

## `symbol-bootstrap-util conv4142`

Convert addresses.yml encrypted with version 4.1.x to 4.2.x.

```
USAGE
  $ symbol-bootstrap-util conv4142 -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input encrypted with version 4.1.x addresses.yml
  -o, --out=<value>  (required) output encrypted with version 4.2.x addresses.yml

DESCRIPTION
  Convert addresses.yml encrypted with version 4.1.x to 4.2.x.

EXAMPLES
  $ symbol-bootstrap-util conv4142 -i addresses_41.yml -o addresses_42.yml
```

_See code: [src/commands/conv4142/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/conv4142/index.ts)_

## `symbol-bootstrap-util conv4241`

Convert addresses.yml encrypted with version 4.2.x to 4.1.x.

```
USAGE
  $ symbol-bootstrap-util conv4241 -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input encrypted with version 4.2.x addresses.yml
  -o, --out=<value>  (required) output encrypted with version 4.1.x addresses.yml

DESCRIPTION
  Convert addresses.yml encrypted with version 4.2.x to 4.1.x.

EXAMPLES
  $ symbol-bootstrap-util conv4241 -i addresses_42.yml -o addresses_41.yml
```

_See code: [src/commands/conv4241/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/conv4241/index.ts)_

## `symbol-bootstrap-util dec41`

Decrypt addresses.yml in version 4.1.x.

```
USAGE
  $ symbol-bootstrap-util dec41 -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input encrypted addresses.yml
  -o, --out=<value>  (required) output decryption addresses.yml

DESCRIPTION
  Decrypt addresses.yml in version 4.1.x.

EXAMPLES
  $ symbol-bootstrap-util dec41 -i addresses_enc.yml -o addresses_dec.yml
```

_See code: [src/commands/dec41/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/dec41/index.ts)_

## `symbol-bootstrap-util dec42`

Decrypt addresses.yml in version 4.2.x.

```
USAGE
  $ symbol-bootstrap-util dec42 -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input encrypted addresses.yml
  -o, --out=<value>  (required) output decryption addresses.yml

DESCRIPTION
  Decrypt addresses.yml in version 4.2.x.

EXAMPLES
  $ symbol-bootstrap-util dec42 -i addresses_enc.yml -o addresses_dec.yml
```

_See code: [src/commands/dec42/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/dec42/index.ts)_

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

_See code: [src/commands/enc41/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/enc41/index.ts)_

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

_See code: [src/commands/enc42/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/enc42/index.ts)_

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

Change password in encrypted addresses.yml

```
USAGE
  $ symbol-bootstrap-util passwd -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input encrypted addresses.yml
  -o, --out=<value>  (required) output encrypted addresses.yml

DESCRIPTION
  Change password in encrypted addresses.yml

EXAMPLES
  $ symbol-bootstrap-util passwd41 -i addresses_current.yml -o addresses_new.yml
```

_See code: [src/commands/passwd/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/passwd/index.ts)_

## `symbol-bootstrap-util passwd41`

Change password in encrypted addresses.yml in version 4.1.x.

```
USAGE
  $ symbol-bootstrap-util passwd41 -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input encrypted with version 4.1.x addresses.yml
  -o, --out=<value>  (required) output encrypted with version 4.1.x addresses.yml

DESCRIPTION
  Change password in encrypted addresses.yml in version 4.1.x.

EXAMPLES
  $ symbol-bootstrap-util passwd41 -i addresses_current.yml -o addresses_new.yml
```

_See code: [src/commands/passwd41/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/passwd41/index.ts)_

## `symbol-bootstrap-util passwd42`

Change password in encrypted addresses.yml in version 4.2.x.

```
USAGE
  $ symbol-bootstrap-util passwd42 -i <value> -o <value>

FLAGS
  -i, --in=<value>   (required) input encrypted with version 4.2.x addresses.yml
  -o, --out=<value>  (required) output encrypted with version 4.2.x addresses.yml

DESCRIPTION
  Change password in encrypted addresses.yml in version 4.2.x.

EXAMPLES
  $ symbol-bootstrap-util passwd42 -i addresses_current.yml -o addresses_new.yml
```

_See code: [src/commands/passwd42/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/passwd42/index.ts)_
<!-- commandsstop -->
