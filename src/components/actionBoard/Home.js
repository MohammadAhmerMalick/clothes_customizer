import React from 'react'
import { Link } from 'react-router-dom'
import HomeAction from './HomeAction'

export default function Home() {

  const homeActions = [
    { name: "text-artboard-icon", text: "add text", link: "addText" },
    { name: "art-artboard-icon", text: "add art", link: "addArt" },
    { name: "upload-artboard-icon", text: "upload", link: "upload" },
    { name: "change-product-artboard-icon", text: "change products", link: "productColors" },
  ]
  return (
    <div className="action-board-home">
      <h3>What’s next for you?</h3>
      {/* <h3>How do you want to start?</h3> */}
      <div className="options">
        {homeActions.map((action, index) =>
          <Link to={action.link} key={index}>
            <HomeAction name={action.name} text={action.text} />
          </Link>
        )}
      </div>
      <p>or <Link className="blue-link" to="./">start over</Link></p>
    </div>
  )
}
