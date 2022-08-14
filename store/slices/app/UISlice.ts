import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UIInterface } from '../../../ts/interface'
import { ThemeModes } from '../../../ts/enum'

const initialState: UIInterface = {
  theme: ThemeModes.LIGHT,
}

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<UIInterface['theme']>) => ({
      ...state,
      theme: action.payload,
    }),
  },
})

export const { changeTheme } = UISlice.actions

export default UISlice.reducer
