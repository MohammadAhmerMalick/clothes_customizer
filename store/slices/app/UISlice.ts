import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UISliceInterface } from '../../../ts/interface'
import { ThemeColorsEnum } from '../../../ts/enum'

const initialState: UISliceInterface = {
  themeColor: ThemeColorsEnum.DARK,
}

export const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    changeTheme: (
      state: UISliceInterface,
      { payload }: PayloadAction<UISliceInterface['themeColor']>
    ) => {
      localStorage.setItem('themeColor', payload)
      return {
        ...state,
        themeColor: payload,
      }
    },
  },
})

export const { changeTheme } = UISlice.actions

export const UIReducer = UISlice.reducer
