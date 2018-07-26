/**
 * Return a formatted string using an array of arguments
 *
 * @param args array of arguments
 * @returns a formatted string
 */
function sprintfv (args: any[]): string {
  const argsLen: number = args.length
  const formatv: string = (args[0] || '').toString()
  const argv: any[] = []
  const argvLen: number = argsLen > 0 ? argsLen - 1 : 0

  // Notice: type specifier '%s' is only supported
  const formats: string[] = formatv.split('%s')
  const formatsLen: number = formats.length

  if (formatsLen <= 0) {
    return formatv
  }

  const formatLen: number = formatsLen - 1

  if (formatLen > argvLen) {
    throw new Error('Too few arguments supplied.')
  }

  for (let i = 0; i < argsLen - 1; ++i) {
    argv.push(
      (args[i + 1] || '').toString()
    )
  }

  let str = ''

  for (let i = 0; i < formatsLen; i++) {
    str += formats[i] || ''

    if (i < formatLen) {
      str += argv[i] || ''
    }
  }

  return str
}

/**
 * Return a formatted string and accepts a variable number of arguments
 * whose first argument correspond to string format
 *
 * @returns a formatted string
 */
export function sprintf (...args: any[]): string {
  return sprintfv(args)
}

/**
 * Operates as `sprintf()` but accepts an array of arguments
 *
 * @param format string format
 * @param argsv an array of arguments
 * @returns a formatted string
 */
export function vsprintf (format: any = '', argsv: any[] = []): string {
  return sprintfv([ format ].concat(argsv))
}
