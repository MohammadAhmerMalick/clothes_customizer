import { combineReducers } from "redux"
import { uiReducer } from "./uiElements/uiReducer"
import { canvas } from "./canvas/canvasReducer"


export const rootReducer = combineReducers({
  uiElements: uiReducer,
  canvas
})