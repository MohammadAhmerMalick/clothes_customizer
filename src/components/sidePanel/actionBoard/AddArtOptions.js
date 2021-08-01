import React from 'react'
import { Link } from 'react-router-dom'
import Svgs from '../../../icons/Svgs'

export default function AddArtOptions() {
  const options = [
    { text: 'Library', link: '/addArt/library', icon: "save-icon" },
    { text: 'Unsplash', link: '/addArt/unsplashLibrary', icon: "unsplash-icon" },
  ]
  return (
    <div className="add-art-option">
      {options.map((option, index) =>
        <Link to={option.link} key={index}>
          <Svgs id={option.icon} />
          <p>{option.text}</p>
        </Link>
      )}
    </div >
  )
}
