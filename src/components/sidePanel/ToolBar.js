import { Link } from "react-router-dom";
import ToolbarElement from "./ToolbarElement";

const icons = [
  { name: "text-icon", text: "add text", link: "addText" },
  { name: "art-icon", text: "add art", link: "addArt" },
  { name: "upload-icon", text: "upload", link: "upload" },
  { name: "priduct-color-icon", text: "product colors", link: "productColors" },
  { name: "name-icon", text: "add names", link: "addNames" },
  { name: "notes-icon", text: "add notes", link: "addNotes" },
]

export default function ToolBar() {

  return (
    <div className="toolbar">
      {icons.map((icon, index) =>
        <Link key={index} to={icon.link}>
          <ToolbarElement
            name={icon.name}
            text={icon.text}
          />
        </Link>
      )}
    </div>
  )
}
