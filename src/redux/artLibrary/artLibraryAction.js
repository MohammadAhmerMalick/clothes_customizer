import axios from 'axios'
import {
  SEARCH_ART_VALUE,
  ART_LIBRARY_REQUEST,
  ART_LIBRARY_SUCCESS,
  ART_LIBRARY_FAILURE
} from './artLibraryTypes'

export const setSearchArtValue = (value) => {
  return {
    type: SEARCH_ART_VALUE,
    payload: value
  }
}

export const artLibraryRequest = () => {
  return {
    type: ART_LIBRARY_REQUEST,
  }
}
export const artLibrarySuccess = (list) => {
  return {
    type: ART_LIBRARY_SUCCESS,
    payload: list
  }
}
export const artLibraryFailure = (error) => {
  return {
    type: ART_LIBRARY_FAILURE,
    payload: error
  }
}

export const getArtLibrary = ({ type = "", url, search = "" }) => {
  return async (dispatch) => {
    dispatch(artLibrarySuccess([]))
    dispatch(artLibraryRequest())
    try {
      let res = {}
      if ((type === 'storedLibrary' || type === 'unsplash') && search === '') {
        res = await axios.get(url)

        const data = res.data.results
        const list = data.map(image => { return { link: image.urls.regular } })
        dispatch(artLibrarySuccess(list))
      }
      else if (type === 'unsplash-api' && search !== '') {

        const client_id = "client_id=MGyvofWOp0tqz5fUqACilxugQMA23AHpQ1H8cvb9YSc"
        const perPage = 'per_page=30'
        const query = `query=${search}`
        const page = 'page=1'
        url = url + '?' + client_id + '&' + perPage + '&' + query + '&' + page

        res = await axios.get(url)
        const data = res.data.results
        const list = data.map(image => { return { link: image.urls.regular } })
        dispatch(artLibrarySuccess(list))
      } else {
        dispatch(artLibrarySuccess([]))
      }
    } catch (error) {
      console.log({ error: "error in fatching request please check unsplash key or may be you are using testing node server" })
      console.log({ error_message: error.message })
    }
  }
}