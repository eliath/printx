const col = require('chalk')

const p = console.log

exports.info = function(...args) {
  p(col.blue('[INFO]'), ...args)
}

exports.notify = function(...args) {
  p(col.green(`> ${args.join(' ')}`))
}

exports.warn = function(...args) {
  p(col.yellow('[WARN]'), ...args)
}

exports.error = function(...args) {
  console.error(col.red('[ERROR]'), ...args)
}

exports.label = function(l, ...args) {
  p(`${col.bold(l)}:\t`, ...args)
}

exports.date = function(...args) {
  const dateString = (new Date()).toLocaleString(undefined, { hour12: false })
  p(col.bold(`[${dateString}]`), ...args)
}

exports.time = function(...args) {
  p(col.bold(`[${Date.now()}]`), ...args)
}

exports.status = function(pct) {
  const SIZE = 32
  const bars = Math.floor(SIZE * pct)
  const spaces = SIZE - bars

  process.stdout.write([
    ' [',
    '='.repeat(bars),
    ' '.repeat(spaces),
    '] ',
    Math.round(pct * 100),
    '%\r'
  ].join(''))
  if (pct === 1) p('')
}

exports.sep = function(s = '-') {
  const columns = process.stdout.columns || 80
  const reps = Math.floor(columns / s.length)
  p(`\n${s.repeat(reps)}\n`)
}
