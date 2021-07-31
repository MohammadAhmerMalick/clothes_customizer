import CanvasBackground from "./CanvasBackground";
import CanvasRightOptions from "./canvasOptions/CanvasRightOptions";

export default function CanvasContainer() {
  return (
    <div className="canvas-container">
      <CanvasBackground />
      <CanvasRightOptions />
    </div>
  )
}
