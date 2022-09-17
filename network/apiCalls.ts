import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/'

export const getUnSplashImages = async (keyword: string) => {
  const res = await axios.get('splashImagesAPI', { params: { keyword } })
  return res.data
}

export const getProducts = async () => {
  const res = await axios.get('productsAPI')
  return res.data
}
