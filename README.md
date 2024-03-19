# oclif-hello-world

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
* [`symbol-bootstrap-util hello PERSON`](#symbol-bootstrap-util-hello-person)
* [`symbol-bootstrap-util hello world`](#symbol-bootstrap-util-hello-world)
* [`symbol-bootstrap-util help [COMMAND]`](#symbol-bootstrap-util-help-command)
* [`symbol-bootstrap-util plugins`](#symbol-bootstrap-util-plugins)
* [`symbol-bootstrap-util plugins:install PLUGIN...`](#symbol-bootstrap-util-pluginsinstall-plugin)
* [`symbol-bootstrap-util plugins:inspect PLUGIN...`](#symbol-bootstrap-util-pluginsinspect-plugin)
* [`symbol-bootstrap-util plugins:install PLUGIN...`](#symbol-bootstrap-util-pluginsinstall-plugin-1)
* [`symbol-bootstrap-util plugins:link PLUGIN`](#symbol-bootstrap-util-pluginslink-plugin)
* [`symbol-bootstrap-util plugins:uninstall PLUGIN...`](#symbol-bootstrap-util-pluginsuninstall-plugin)
* [`symbol-bootstrap-util plugins reset`](#symbol-bootstrap-util-plugins-reset)
* [`symbol-bootstrap-util plugins:uninstall PLUGIN...`](#symbol-bootstrap-util-pluginsuninstall-plugin-1)
* [`symbol-bootstrap-util plugins:uninstall PLUGIN...`](#symbol-bootstrap-util-pluginsuninstall-plugin-2)
* [`symbol-bootstrap-util plugins update`](#symbol-bootstrap-util-plugins-update)

## `symbol-bootstrap-util hello PERSON`

Say hello

```
USAGE
  $ symbol-bootstrap-util hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/hello/index.ts)_

## `symbol-bootstrap-util hello world`

Say hello world

```
USAGE
  $ symbol-bootstrap-util hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ symbol-bootstrap-util hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/ccHarvestasya/symbol-bootstrap-util/blob/v1.0.1/src/commands/hello/world.ts)_

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

## `symbol-bootstrap-util plugins`

List installed plugins.

```
USAGE
  $ symbol-bootstrap-util plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ symbol-bootstrap-util plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/index.ts)_

## `symbol-bootstrap-util plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ symbol-bootstrap-util plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ symbol-bootstrap-util plugins add

EXAMPLES
  $ symbol-bootstrap-util plugins add myplugin 

  $ symbol-bootstrap-util plugins add https://github.com/someuser/someplugin

  $ symbol-bootstrap-util plugins add someuser/someplugin
```

## `symbol-bootstrap-util plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ symbol-bootstrap-util plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ symbol-bootstrap-util plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/inspect.ts)_

## `symbol-bootstrap-util plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ symbol-bootstrap-util plugins install PLUGIN...

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ symbol-bootstrap-util plugins add

EXAMPLES
  $ symbol-bootstrap-util plugins install myplugin 

  $ symbol-bootstrap-util plugins install https://github.com/someuser/someplugin

  $ symbol-bootstrap-util plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/install.ts)_

## `symbol-bootstrap-util plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ symbol-bootstrap-util plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ symbol-bootstrap-util plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/link.ts)_

## `symbol-bootstrap-util plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ symbol-bootstrap-util plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ symbol-bootstrap-util plugins unlink
  $ symbol-bootstrap-util plugins remove

EXAMPLES
  $ symbol-bootstrap-util plugins remove myplugin
```

## `symbol-bootstrap-util plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ symbol-bootstrap-util plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/reset.ts)_

## `symbol-bootstrap-util plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ symbol-bootstrap-util plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ symbol-bootstrap-util plugins unlink
  $ symbol-bootstrap-util plugins remove

EXAMPLES
  $ symbol-bootstrap-util plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/uninstall.ts)_

## `symbol-bootstrap-util plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ symbol-bootstrap-util plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ symbol-bootstrap-util plugins unlink
  $ symbol-bootstrap-util plugins remove

EXAMPLES
  $ symbol-bootstrap-util plugins unlink myplugin
```

## `symbol-bootstrap-util plugins update`

Update installed plugins.

```
USAGE
  $ symbol-bootstrap-util plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.3.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
