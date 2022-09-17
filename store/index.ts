import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { UIReducer } from './slices/app/UISlice'
import { sidePanelReducer } from './slices/app/sidePanelSlice'
import { searchReducer } from './slices/app/searchesSlice'
import { productReducer } from './slices/app/productSlice'

export const store = configureStore({
  reducer: { UIReducer, sidePanelReducer, searchReducer, productReducer },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
