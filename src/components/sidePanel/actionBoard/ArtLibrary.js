import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ArtItemContainer from './ArtItemContainer'
import { getArtLibrary } from '../../../redux'

export default function ArtLibrary() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArtLibrary(
      {
        type: 'storedLibrary',
        url: 'http://localhost:8000/storedLibrary'
      }
    ))
  }, [dispatch])

  return (
    <ArtItemContainer />
  )
}