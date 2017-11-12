# printx

Simple, opinionated print tools

## Installation

    $ npm install printx

## API

    import printx from 'printx'

    printx.info('Hello', 'World')
    // stdout: "[INFO] Hello World"


| function | description | example out |
| -------- | ----------- | ----------- |
| `info(...args)` | prepends blue [INFO] | [INFO] Hello World |
| `notify(...args)` | prepends '>', writes green | > Hello World |
| `warn(...args)` | prepends yellow '[WARN]' | [WARN] Hello World |
| `error(...args)` | prepends red '[ERROR]', prints to stderr | [ERROR] Hello World |
| `date(...args)` | prepends the local date/time in bold | **[MM/DD/YYYY, HH:MM:SS]** Hello World |
| `time(...args)` | prepends the current epoch in bold | **[1510527590629]** Hello World |
| `label(lbl, ...args)` | prepends `lbl` arg in bold with colon | **label**: Hello World |
| `status(pct)` | writes a status bar to stdout. `pct` is a number 0-1 representing completion. | ` [========        ] 50%` |
| `sep(str = '-')` | writes a separator to width of stdout. `str` is `-` by default. | `----------------` |


