import axios from 'axios'
import { imagesRes } from './static'

export const fetchUnSplashImages = async (keyword: string | undefined) => {
  if (!keyword) {
    return 'keyword missing'
  }

  const clientId = 'MGyvofWOp0tqz5fUqACilxugQMA23AHpQ1H8cvb9YSc'
  const perPage = 30
  const query = keyword
  const page = '1'
  // url = url + '?' + client_id + '&' + perPage + '&' + query + '&' + page

  // const url = `https://api.unsplash.com/search/photos?client_id=MGyvofWOp0tqz5fUqACilxugQMA23AHpQ1H8cvb9YSc
  // per_page=30
  // query=ca
  // page=1`
  // api.unsplash.com/search/photos?client_id=MGyvofWOp0tqz5fUqACilxugQMA23AHpQ1H8cvb9YSc&per_page=30&query=ca&page=1

  // console.log({ keyword })

  const res = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: clientId,
      perPage,
      query,
      page,
    },
  })

  console.log({ res })

  const results = res.data.results.map((value: { [key: string]: any }) => ({
    id: value.id,
    urls: value.urls,
    width: value.width,
    height: value.height,
    color: value.color,
  }))
  // const results = imagesRes.results

  return results
}

export const x = ''
