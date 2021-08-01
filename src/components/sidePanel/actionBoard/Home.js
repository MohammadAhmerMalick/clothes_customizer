import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import HomeOption from './HomeOptions'
import { toolbarAcitveElement } from '../../../redux'

export default function Home() {
  const homeOptions = [
    { name: "text-artboard-icon", text: "add text", link: "/addText" },
    { name: "art-artboard-icon", text: "add art", link: "/addArt" },
    { name: "upload-artboard-icon", text: "upload", link: "/upload" },
    { name: "change-product-artboard-icon", text: "change products", link: "/productColors" },
  ]

  const dispatch = useDispatch()
  useEffect(() => { dispatch(toolbarAcitveElement('')) }, [dispatch])

  return (
    <div className="action-board-home">
      <h3>What’s next for you?</h3>
      {/* <h3>How do you want to start?</h3> */}
      <div className="options">
        {homeOptions.map((action, index) =>
          <Link to={action.link} key={index}>
            <HomeOption name={action.name} text={action.text} />
          </Link>
        )}
      </div>
      <p>or <Link className="blue-link" to="./">start over</Link></p>
    </div>
  )
}
