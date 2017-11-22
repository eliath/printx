const col = require('chalk')
const xprint = require('.')
const test = require('tape')
const listen = require('intercept-stdout')

test('info', t => {
  let result = ''
  const unlisten = listen(string => {
    result += string
  })
  xprint.info('test', 'foo', 'bar')
  unlisten()
  t.equal(result, `${col.blue('[INFO]')} test foo bar\n`)
  t.end()
})

test('notify', t => {
  let result = ''
  const unlisten = listen(string => {
    result += string
  })
  xprint.notify('test', 'foo', 'bar')
  unlisten()
  t.equal(result, `${col.green('> test foo bar')}\n`)
  t.end()
})

test('warn', t => {
  let result = ''
  const unlisten = listen(string => {
    result += string
  })
  xprint.warn('test', 'foo', 'bar')
  unlisten()
  t.equal(result, `${col.yellow('[WARN]')} test foo bar\n`)
  t.end()
})

test('error', t => {
  let result = ''
  const unlisten = listen(string => {
    result += string
  })
  xprint.error('test', 'foo', 'bar')
  unlisten()
  t.equal(result, `${col.red('[ERROR]')} test foo bar\n`)
  t.end()
})

test('date', t => {
  let result = ''
  const unlisten = listen(string => {
    result += string
  })
  xprint.date('test', 'foo', 'bar')
  const dateStr = (new Date()).toLocaleString(undefined, { hour12: false })
  unlisten()
  t.equal(result, `${col.bold(`[${dateStr}]`)} test foo bar\n`)
  t.end()
})

test('time', t => {
  let result = ''
  const unlisten = listen(string => {
    result += string
  })
  xprint.time('test', 'foo', 'bar')
  unlisten()
  const re = /.+\[\d{13}\].+test foo bar/
  t.ok(result.match(re))
  t.end()
})

test('label', t => {
  let result = ''
  const unlisten = listen(string => {
    result += string
  })
  xprint.label('test', 'foo', 'bar')
  unlisten()
  t.equal(result, `${col.bold('test')}:\t foo bar\n`)
  t.end()
})

test('status', t => {
  let result = ''
  const unlisten = listen(string => {
    result += string
  })
  xprint.status(0)
  xprint.status(0.252332232)
  xprint.status(1)
  unlisten()

  let expected = ` [${' '.repeat(32)}] 0%\r`
  expected += ` [${'='.repeat(8)}${' '.repeat(24)}] 25%\r`
  expected += ` [${'='.repeat(32)}] 100%\r\n`

  t.equal(result, expected)
  t.end()
})

test('sep', t => {
  let result = ''
  const unlisten = listen(string => {
    result += string
  })
  const sepStr = 'foobar'
  xprint.sep()
  xprint.sep(sepStr)
  unlisten()

  const cols = process.stdout.columns || 80
  const rep = Math.floor(cols / sepStr.length)
  let expected = `\n${'-'.repeat(cols)}\n\n`
  expected += `\n${sepStr.repeat(rep)}\n\n`

  t.equal(result, expected)
  t.end()
})
