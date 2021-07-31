import { TOOLBAR_ACITVE_ELEMENT } from './uiTypes'

export const toolbarAcitveElement = (name) => {
  return {
    type: TOOLBAR_ACITVE_ELEMENT,
    payload: name
  }
}