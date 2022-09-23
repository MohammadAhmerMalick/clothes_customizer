import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/'

export const callGetUnSplashImages = async (keyword: string) => {
  const res = await axios.get('splashImagesAPI', { params: { keyword } })
  return res.data
}

export const callGetProducts = async () => {
  const res = await axios.get('productsAPI')
  return res.data
}
