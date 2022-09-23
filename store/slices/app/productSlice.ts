import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { callGetProducts } from '../../../network/apiCalls'
import { ProductsSidesEnum } from '../../../ts/enum'
import { ProductSliceInterface } from '../../../ts/interface'
import { toaster } from '../../../utils/utilsFunctions'

const links = {
  originalLink: '',
  scaledLink: '',
}

const productInitialState = {
  id: '',
  front: links,
  back: links,
  left: links,
  right: links,
}

export const initialState: ProductSliceInterface = {
  loading: true,
  data: {
    allProducts: [],
    selectedProduct: productInitialState,
    selectedSide: ProductsSidesEnum.FRONT,
  },
  error: {},
}

export const getProductsAction = createAsyncThunk(
  'getProductsAction',
  async (any, { rejectWithValue }) => {
    try {
      const response = await callGetProducts()

      if (response.length) {
        return response
      }
      console.log({ response })

      toaster.info('Unable to load products right now')

      return []
    } catch (error: any) {
      toaster.error(error.response.data.message)
      return rejectWithValue(error.response.data)
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProductsAction.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(getProductsAction.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: { ...state.data, allProducts: payload },
        error: {},
      }))
      .addCase(getProductsAction.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        data: { ...state.data },
        error: payload as object,
      }))
  },
})

export const productReducer = productSlice.reducer
