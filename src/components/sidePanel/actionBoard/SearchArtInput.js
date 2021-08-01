import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Svgs from '../../../icons/Svgs'
import { setSearchArtValue, getArtLibrary } from '../../../redux'

export default function SearchArtInput() {
  const artLibrary = useSelector(state => state.artLibrary)
  const dispatch = useDispatch()

  const kaydown = (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearchArtValue(e.target.value))
      dispatch(getArtLibrary({
        type: 'unsplash-api',
        url: 'https://api.unsplash.com/search/photos',
        search: artLibrary.searchArtValue
      }))
    }
  }
  const onChange = (e) => dispatch(setSearchArtValue(e.target.value))

  return (
    <div className='search-art-input'>
      <Svgs id="search-icon" />
      <input
        type="text" value={artLibrary.searchArtValue}
        onKeyDown={kaydown}
        onChange={onChange}
      />
      <span className="icon-container" onClick={() => dispatch(setSearchArtValue(""))}  >
        <Svgs id="cross-with-circle-icon" />
      </span>
    </div >
  )
}
