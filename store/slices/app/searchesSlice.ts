import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { toaster } from '../../../utils/utilsFunctions'
import { getUnSplashImages } from '../../../network/apiCalls'
import { searchesSliceInterface } from '../../../ts/interface'

const initialState: searchesSliceInterface = {
  unSplashImages: {
    loading: false,
    data: [],
    error: {},
  },
}

export const getUnSplashImagesAction = createAsyncThunk(
  'getUnSplashImages',
  async (keyword: string, { rejectWithValue }) => {
    try {
      const response = await getUnSplashImages(keyword)
      return response
    } catch (error: any) {
      if (!error.response.data) {
        return rejectWithValue(error)
      }
      toaster.error(error.response.data.message)
      return rejectWithValue(error.response.data)
    }
  }
)

const searchesSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    setUnSplashResults: (
      state: searchesSliceInterface,
      action: PayloadAction<searchesSliceInterface['unSplashImages']>
    ) => ({
      ...state,
      unSplashResults: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUnSplashImagesAction.pending, (state) => ({
        ...state,
        unSplashImages: {
          ...state.unSplashImages,
          loading: true,
        },
      }))
      .addCase(getUnSplashImagesAction.fulfilled, (state, action) => ({
        ...state,
        unSplashImages: {
          loading: false,
          data: action.payload,
          error: {},
        },
      }))
      .addCase(getUnSplashImagesAction.rejected, (state, action) => ({
        ...state,
        unSplashImages: {
          ...state.unSplashImages,
          loading: false,
          error: action.payload as object,
        },
      }))
  },
})

export const { setUnSplashResults } = searchesSlice.actions

export const searchReducer = searchesSlice.reducer
