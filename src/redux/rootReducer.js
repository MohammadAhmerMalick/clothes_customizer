import { combineReducers } from "redux"
import { uiReducer } from "./uiElements/uiReducer"
import { canvas } from "./canvas/canvasReducer"
import { artLibraryReducer } from "./artLibrary/artLibraryReducer"

export const rootReducer = combineReducers({
  uiElements: uiReducer,
  canvas,
  artLibrary: artLibraryReducer
})
