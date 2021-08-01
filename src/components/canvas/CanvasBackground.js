import { useSelector } from "react-redux"

export default function CanvasBackground() {
  const layer = useSelector(state => state.canvas)
  return (
    <div className="canvas-background">
      {layer.side === 'front'
        ? <img src={require("../../images/front_model.png").default} alt="Cloth Front Section" />
        : <img src={require("../../images/back_model.png").default} alt="Cloth Back Section" />
      }
    </div>
  )
}
