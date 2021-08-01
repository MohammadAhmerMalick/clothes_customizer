import { SIDE, SLEEVE_DESIGN, ZOOMED } from './canvasTypes'

export const side = (option) => {
  return {
    type: SIDE,
    payload: option
  }
}
export const sleeveDesign = (option) => {
  return {
    type: SLEEVE_DESIGN,
    payload: option
  }
}
export const zoomed = (option) => {
  return {
    type: ZOOMED,
    payload: option
  }
}