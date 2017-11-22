# printx

Simple print toolbox for node.js.

Colors are provided via the `chalk` module, which should be safe for
screens without color support.

## Installation

    $ yarn install printx

## API

### General usage:

    import printx from 'printx'

    printx.info('Hello', 'World')
    // stdout: "[INFO] Hello World"

### Available functions:

| function | description | example out |
| -------- | ----------- | ----------- |
| `info(...args)` | prepends blue [INFO] | `[INFO] Hello World` |
| `notify(...args)` | prepends '>', writes green | `> Hello World` |
| `warn(...args)` | prepends yellow '[WARN]' | `[WARN] Hello World` |
| `error(...args)` | prepends red '[ERROR]', prints to stderr | `[ERROR] Hello World` |
| `date(...args)` | prepends the local date/time in bold | `[MM/DD/YYYY, HH:MM:SS] Hello World` |
| `time(...args)` | prepends the current epoch in bold | `[1510527590629] Hello World` |
| `label(lbl, ...args)` | prepends `lbl` arg in bold with colon | `foobar: Hello World` |
| `status(pct)` | prints a 'live' status bar. `pct` is the completion as a decimal number [0,1] | ` [========= ] 90%` |
| `sep(str = '-')` | writes a separator to width of stdout. `str` is `-` by default. | `----------------` |
