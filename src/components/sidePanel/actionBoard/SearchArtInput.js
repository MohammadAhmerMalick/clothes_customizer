import React from 'react'
import Svgs from '../../../icons/Svgs'

export default function SearchArtInput() {
  return (
    <div className='search-art-input'>
      <Svgs id="search-icon" />
      <input type="text" />
      <Svgs id="cross-with-circle-icon" />
    </div>
  )
}
