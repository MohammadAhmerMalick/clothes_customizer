import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/'

export const getImages = async (keyword: string) => {
  const res = await axios.get('splashImages', { params: { keyword } })

  console.log({ res })
  return res.data
}

export const x = ''
