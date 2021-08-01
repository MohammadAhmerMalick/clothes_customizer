import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import ArtItemContainer from "./ArtItemContainer"
import { getArtLibrary } from '../../../redux'

export default function UnsplashLibrary() {
  const dispatch = useDispatch()
  const artLibrary = useSelector(state => state.artLibrary)

  useEffect(() => {
    dispatch(getArtLibrary({
      type: 'unsplash-api',
      url: 'https://api.unsplash.com/search/photos',
      search: artLibrary.searchArtValue
    }))
  }, [dispatch,artLibrary.searchArtValue])

  return (
    <ArtItemContainer />
  )
}
