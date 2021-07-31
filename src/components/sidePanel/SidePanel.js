import ActionBoard from "./ActionBoard";
import ToolBar from "./ToolBar";

export default function SidePanel() {
  return (
    <div className="side-panel">
      <div className="side-panel-body">
        <ToolBar />
        <ActionBoard />
      </div>
    </div>
  )
}
