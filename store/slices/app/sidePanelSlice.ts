import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ToolkitOptionsList } from '../../../ts/enum'

import { sidePanelSliceInterface } from '../../../ts/interface'

const initialState: sidePanelSliceInterface = {
  selected: ToolkitOptionsList.ADD_TEXT,
  imageLayoutOption: 'single',
}

export const sidePanelSlice = createSlice({
  name: 'sitePanel',
  initialState,
  reducers: {
    setSelected: (
      state: sidePanelSliceInterface,
      { payload }: PayloadAction<sidePanelSliceInterface['selected']>
    ) => {
      localStorage.setItem('selected', payload)
      return { ...state, selected: payload }
    },
    setImageLayoutOption: (
      state: sidePanelSliceInterface,
      { payload }: PayloadAction<sidePanelSliceInterface['imageLayoutOption']>
    ) => {
      localStorage.setItem('imageLayoutOption', payload)
      return { ...state, imageLayoutOption: payload }
    },
  },
})

export const { setSelected, setImageLayoutOption } = sidePanelSlice.actions

export const sidePanelReducer = sidePanelSlice.reducer
