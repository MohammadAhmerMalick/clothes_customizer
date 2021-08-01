import React from 'react'
import ArtItemContainer from './ArtItemContainer'

export default function artLibrary() {
  const libraryImtes = [
    { link: '/images/item-1.png' },
    { link: '/images/item-2.png' },
    { link: '/images/item-3.png' },
  ]
  return (
    <div>
      <ArtItemContainer items={libraryImtes} />
    </div>
  )
}