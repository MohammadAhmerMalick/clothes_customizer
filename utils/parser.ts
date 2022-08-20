export const toLInkCase = (string: string) => {
  if (!string) return ''

  return string.charAt(0).toLowerCase() + string.replace(' ', '').slice(1)
}

export const utils = ''
