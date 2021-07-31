import { TOOLBAR_ACITVE_ELEMENT } from './uiTypes'

const initialState = {
  toolbarAcitveElement: ""
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {

    case TOOLBAR_ACITVE_ELEMENT: return {
      ...state,
      toolbarAcitveElement: action.payload
    }
    default: return state
  }
}
