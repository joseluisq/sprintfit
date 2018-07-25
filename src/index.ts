const chars = 's'

/**
 * Return a formatted string and accepts a variable number of arguments.
 *
 * @returns a formatted string
 */
export function sprintf (...args: any[]): string {
  const len: number = args.length
  const format: string = (args[0] || '').toString()
  const argv: any[] = len > 0 ? new Array(len - 1) : []

  // TODO: type specifier '%s' supported only
  const formats = format.split(`%${chars}`)

  if (formats.length <= 0) {
    return format
  }

  const times = formats.length - 1

  if (times > argv.length) throw new Error('Too few arguments supplied.')

  for (let i = 0; i < len - 1; ++i) {
    argv[i] = (args[i + 1] || '').toString()
  }

  let str = ''

  for (let i = 0; i < formats.length; i++) {
    str += formats[i] || ''

    if (i < times) {
      str += argv[i] || ''
    }
  }

  return str
}

export default sprintf
