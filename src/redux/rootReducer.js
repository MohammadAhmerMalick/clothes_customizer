import { combineReducers } from "redux"
import { uiReducer } from "./uiElements/uiReducer"

export const rootReducer = combineReducers({
  uiElements: uiReducer
})