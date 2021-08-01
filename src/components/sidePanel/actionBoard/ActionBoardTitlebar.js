import { Link } from "react-router-dom";
import Svgs from "../../../icons/Svgs";

export default function ActionBoardTitlebar({ text }) {
  return (
    <div className="action-board-titlebar">
      <Link to="./">
        {/* <Svgs id="cross-icon" /> */}
      </Link>
      <h5>{text}</h5>
      <Link to="/">
        <Svgs id="cross-icon" />
      </Link>
    </div>
  )
}
