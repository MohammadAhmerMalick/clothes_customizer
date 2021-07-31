import CanvasContainer from "./canvas/CanvasContainer"
import SidePanel from "./sidePanel/SidePanel"

export default function Editor() {
  return (
    <div className="editor">
      <SidePanel />
      <CanvasContainer />
    </div>
  )
}
