require('colors')

const p = console.log

exports.info = function(...args) {
  p('[INFO]'.blue, ...args)
}

exports.notify = function(...args) {
  p(`> ${args.join(' ')}`.green)
}

exports.warn = function(...args) {
  p('[WARN]'.yellow, ...args)
}

exports.error = function(...args) {
  console.error('[ERROR]'.red, ...args)
}

exports.label = function(l, ...args) {
  p(`${l.bold}:\t`, ...args)
}

exports.date = function(...args) {
  const dateString = (new Date()).toLocaleString(undefined, { hour12: false })
  p(`[${dateString}]`.bold, ...args)
}

exports.time = function(...args) {
  p(`[${Date.now()}]`.bold, ...args)
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
