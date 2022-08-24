import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ToolkitOptionsList } from '../../../ts/enum'

import { sidePanelSliceInterface } from '../../../ts/interface'

const initialState: sidePanelSliceInterface = {
  selected: ToolkitOptionsList.ADD_TEXT,
}

export const sidePanelSlice = createSlice({
  name: 'sitePanel',
  initialState,
  reducers: {
    setSelected: (
      state: sidePanelSliceInterface,
      action: PayloadAction<sidePanelSliceInterface['selected']>
    ) => {
      localStorage.setItem('selected', action.payload)
      return { ...state, selected: action.payload }
    },
  },
})

export const { setSelected } = sidePanelSlice.actions

export const sidePanelReducer = sidePanelSlice.reducer
