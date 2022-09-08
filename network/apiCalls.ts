import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/'

export const getUnSplashImages = async (keyword: string) => {
  const res = await axios.get('splashImages', { params: { keyword } })
  return res.data
}

export const x = ''
