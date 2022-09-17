import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getProducts } from '../../../network/apiCalls'
import { ProductsSides } from '../../../ts/enum'
import { ProductSliceInterface } from '../../../ts/interface'
import { toaster } from '../../../utils/utilsFunctions'

const productInitialState = {
  front: '',
  back: '',
  left: '',
  right: '',
}

export const initialState: ProductSliceInterface = {
  loading: true,
  data: {
    allProducts: [],
    selectedProduct: productInitialState,
    selectedSide: ProductsSides.FRONT,
  },
  error: {},
}

export const getProductsAction = createAsyncThunk(
  'getProductsAction',
  async (any, { rejectWithValue }) => {
    console.log('x')
    try {
      const response = await getProducts()
      console.log({ response })
      return response
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
