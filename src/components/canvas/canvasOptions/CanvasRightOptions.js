import { useDispatch, useSelector } from "react-redux";
import Svgs from "../../../icons/Svgs";
import { side, sleeveDesign, zoomed } from '../../../redux'

export default function CanvasRightOptions() {
  const option = useSelector(state => state.canvas)
  const dispatch = useDispatch()
  return (
    <div className="canvas-right-options">
      <div
        className={`option front-layout-option ${option.side === 'front' && 'selected'}`}
        onClick={() => dispatch(side('front'))}>
        <img src={require("../../../images/front_model.png").default} alt="Cloth Front Section" />
        <p>front</p>
      </div>
      <div
        className={`option back-layout-option ${option.side === 'back' && 'selected'}`}
        onClick={() => dispatch(side('back'))}>
        <img src={require("../../../images/back_model.png").default} alt="Cloth Back Section" />
        <p>back</p>
      </div>

      <div className='option' onClick={() => dispatch(sleeveDesign(!option.sleeveDesign))}>
        <p>sleeve design</p>
      </div>

      <div className='option' onClick={() => dispatch(zoomed(!option.zoomed))}>
        {option.zoomed
          ? <Svgs id="zoom-out-icon" />
          : <Svgs id="zoom-in-icon" />
        }
      </div>
    </div>
  )
}
