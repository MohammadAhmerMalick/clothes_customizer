import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { toaster } from '../../../utils/utilsFunctions'
import { getUnSplashImages } from '../../../network/apiCalls'
import { SearchesSliceInterface } from '../../../ts/interface'

const initialState: SearchesSliceInterface = {
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
      state: SearchesSliceInterface,
      { payload }: PayloadAction<SearchesSliceInterface['unSplashImages']>
    ) => ({
      ...state,
      unSplashResults: payload,
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
      .addCase(getUnSplashImagesAction.fulfilled, (state, { payload }) => ({
        ...state,
        unSplashImages: {
          loading: false,
          data: payload,
          error: {},
        },
      }))
      .addCase(getUnSplashImagesAction.rejected, (state, { payload }) => ({
        ...state,
        unSplashImages: {
          ...state.unSplashImages,
          loading: false,
          error: payload as object,
        },
      }))
  },
})

export const { setUnSplashResults } = searchesSlice.actions

export const searchReducer = searchesSlice.reducer
