import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { searchesSliceInterface } from '../../../ts/interface'

const initialState: searchesSliceInterface = {
  unSplashResults: [],
}
const searchesSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    setUnSplashResults: (
      state: searchesSliceInterface,
      action: PayloadAction<searchesSliceInterface['unSplashResults']>
    ) => ({
      ...state,
      unSplashResults: action.payload,
    }),
  },
})

export const { setUnSplashResults } = searchesSlice.actions

export const searchReducer = searchesSlice.reducer
