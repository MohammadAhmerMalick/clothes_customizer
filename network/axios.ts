import axios from 'axios'

export const fetchUnSplashImages = async (keyword = ''): Promise<object> => {
  const clientId = process.env.UNSPLASH_API_CLIENT_ID
  const perPage = 30
  const query = keyword
  const page = 1

  const res = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: clientId,
      perPage,
      query,
      page,
    },
  })

  const results = res.data.results.map((value: { [key: string]: any }) => ({
    id: value.id,
    urls: value.urls,
    width: value.width,
    height: value.height,
    color: value.color,
  }))

  return results
}

export const x = ''
