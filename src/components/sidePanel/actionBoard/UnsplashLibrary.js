import axios from "axios"
import { useState, useEffect } from "react"
import ArtItemContainer from "./ArtItemContainer"

export default function UnsplashLibrary() {
  const [library, setLibrary] = useState([])

  useEffect(async () => {
    const res = await axios.get('http://localhost:8000/unsplash')
    const unsplashLibrary = res.data.results
    const zz = unsplashLibrary.map((image, index) => { return { link: image.urls.regular } })
    setLibrary(zz)
  }, [])

  return (
    <ArtItemContainer items={library} />
  )
}
