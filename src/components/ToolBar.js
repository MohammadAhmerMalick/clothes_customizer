import ToolbarElement from "./ToolbarElement";

const icons = [
  { name: "text-icon", text: "add text" },
  { name: "art-icon", text: "add art" },
  { name: "upload-icon", text: "upload" },
  { name: "priduct-color-icon", text: "product colors" },
  { name: "name-icon", text: "add names" },
  { name: "notes-icon", text: "add notes" },
]

export default function ToolBar() {

  return (
    <div className="toolbar">
      {icons.map((icon, index) =>
        <ToolbarElement
          key={index}
          name={icon.name}
          text={icon.text}
        />
      )}
    </div>
  )
}
