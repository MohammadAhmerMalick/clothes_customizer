import { SIDE, SLEEVE_DESIGN, ZOOMED } from './canvasTypes'
const initialState = {
  side: "front",
  sleeveDesign: false,
  zoomed: false
}

export const canvas = (state = initialState, action) => {
  switch (action.type) {
    case SIDE: return {
      ...state,
      side: action.payload
    }
    case SLEEVE_DESIGN: return {
      ...state,
      sleeveDesign: action.payload
    }
    case ZOOMED: return {
      ...state,
      zoomed: action.payload
    }
    default: return state
  }
}
