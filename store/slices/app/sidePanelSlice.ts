import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sidePanelSliceInterface } from '../../../ts/interface'

const initialState: sidePanelSliceInterface = {
  selected: '',
  toolkitPanelTitle: '',
}

const sidePanelSlice = createSlice({
  name: 'sitepanel',
  initialState,
  reducers: {
    updateSidePanelState: (
      state: sidePanelSliceInterface,
      action: PayloadAction<sidePanelSliceInterface>
    ) => ({
      selected: action.payload.selected,
      toolkitPanelTitle: action.payload.toolkitPanelTitle,
    }),

    setToolkitPanelTitle: (
      state: sidePanelSliceInterface,
      action: PayloadAction<sidePanelSliceInterface['toolkitPanelTitle']>
    ) => ({ ...state, toolkitPanelTitle: action.payload }),
  },
})

export const { updateSidePanelState, setToolkitPanelTitle } =
  sidePanelSlice.actions

export const sidePanelReducer = sidePanelSlice.reducer
