import { useDispatch, useSelector } from 'react-redux'
import Svgs from '../icons/Svgs'
import { toolbarAcitveElement } from '../redux'

export default function ToolbarElement({ name, text }) {

  const activeElement = useSelector(state => state.uiElements.toolbarAcitveElement)
  const dispatch = useDispatch()

  return (
    <div
      onClick={() => dispatch(toolbarAcitveElement(name))}
      className={`toolbar-element ${activeElement == name
        ? "active"
        : ""}`}>
      <Svgs id={name} />
      <p className="text">{text}</p>
    </div>
  )
}
