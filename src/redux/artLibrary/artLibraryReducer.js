import {
  SEARCH_ART_VALUE,
  ART_LIBRARY_REQUEST,
  ART_LIBRARY_SUCCESS,
  ART_LIBRARY_FAILURE
} from './artLibraryTypes'

const initialState = {
  searchArtValue: "",
  artLibraryRequest: true,
  artLibrary: [],
  artLibraryFailure: "",
}

export const artLibraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ART_VALUE: return {
      ...state,
      searchArtValue: action.payload
    }
    case ART_LIBRARY_REQUEST: return {
      ...state,
      artLibraryRequest: true
    }
    case ART_LIBRARY_SUCCESS: return {
      ...state,
      artLibraryRequest: false,
      artLibrary: action.payload
    }
    case ART_LIBRARY_FAILURE: return {
      ...state,
      artLibraryRequest: false,
      artLibraryFailure: action.payload
    }
    default: return state
  }
}
