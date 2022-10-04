import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  ImageAlignmentoptionsEnum,
  ToolkitOptionsListEnum,
} from '../../../ts/enum'
import { SidePanelSliceInterface } from '../../../ts/interface'

const initialState: SidePanelSliceInterface = {
  selected: ToolkitOptionsListEnum.ADD_TEXT,
  imageLayoutOption: ImageAlignmentoptionsEnum.SINGLE,
}

export const sidePanelSlice = createSlice({
  name: 'sitePanel',
  initialState,
  reducers: {
    setSelected: (
      state: SidePanelSliceInterface,
      { payload }: PayloadAction<SidePanelSliceInterface['selected']>
    ) => {
      localStorage.setItem('selected', payload)
      return { ...state, selected: payload }
    },
    setImageLayoutOption: (
      state: SidePanelSliceInterface,
      { payload }: PayloadAction<SidePanelSliceInterface['imageLayoutOption']>
    ) => {
      localStorage.setItem('imageLayoutOption', payload)
      return { ...state, imageLayoutOption: payload }
    },
  },
})

export const { setSelected, setImageLayoutOption } = sidePanelSlice.actions

export const sidePanelReducer = sidePanelSlice.reducer
