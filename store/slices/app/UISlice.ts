import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UISliceInterface } from '../../../ts/interface'
import { ThemeModes } from '../../../ts/enum'

const initialState: UISliceInterface = {
  theme: ThemeModes.LIGHT,
}

const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeTheme: (
      state: UISliceInterface,
      action: PayloadAction<UISliceInterface['theme']>
    ) => ({
      ...state,
      theme: action.payload,
    }),
  },
})

export const { changeTheme } = UISlice.actions

export const UIReducer = UISlice.reducer
