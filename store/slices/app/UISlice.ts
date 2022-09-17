import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UISliceInterface } from '../../../ts/interface'
import { ThemeColors } from '../../../ts/enum'

const initialState: UISliceInterface = {
  themeColor: ThemeColors.DARK,
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
