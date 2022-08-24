export const toLInkCase = (string: string) => {
  if (!string) return ''

  return string.charAt(0).toLowerCase() + string.replace(' ', '').slice(1)
}

export const toJson = (string: string | null) => {
  const x = JSON.parse(JSON.stringify(string))
  console.log({ x })

  return x
}

// export const toJson = (string: string) =>
//   string ? JSON.parse(JSON.stringify(string)) : ''

export const utils = ''
