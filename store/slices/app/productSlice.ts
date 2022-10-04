import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { callGetProducts } from '../../../network/apiCalls'
import { ProductsSidesEnum } from '../../../ts/enum'
import { ProductsInterface, ProductSliceInterface } from '../../../ts/interface'
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
  fetched: false,
  data: {
    allProducts: [],
    selectedProduct: productInitialState,
    selectedSide: ProductsSidesEnum.FRONT,
  },
  error: { message: '' },
}

export const getProductsAction = createAsyncThunk(
  'getProductsAction',
  async (any, { rejectWithValue }) => {
    try {
      const { data } = await callGetProducts()
      if (data.length) {
        return data
      }

      toaster.info(data.message)

      return []
    } catch (error: any) {
      toaster.error(error.response.data.message)
      return rejectWithValue(error.response.data || 'something went Wrong')
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    chengeProductsFetchedFlag: (
      state: ProductSliceInterface,
      { payload }: PayloadAction<ProductSliceInterface['fetched']>
    ) => ({
      ...state,
      fetched: payload,
    }),
    selectProductAction: (
      state: ProductSliceInterface,
      { payload }: PayloadAction<ProductsInterface>
    ) => ({
      ...state,
      data: { ...state.data, selectedProduct: payload },
    }),
    selectProductSideAction: (
      state: ProductSliceInterface,
      { payload }: PayloadAction<ProductsSidesEnum>
    ) => ({ ...state, data: { ...state.data, selectedSide: payload } }),
  },

  extraReducers(builder) {
    builder
      .addCase(getProductsAction.pending, (state) => ({
        ...state,
        loading: true,
        fetched: true,
      }))
      .addCase(getProductsAction.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        data: { ...state.data, allProducts: payload },
        error: { ...state.error },
      }))
      .addCase(getProductsAction.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        data: { ...state.data },
        error: payload as ProductSliceInterface['error'],
      }))
  },
})

export const {
  chengeProductsFetchedFlag,
  selectProductAction,
  selectProductSideAction,
} = productSlice.actions
export const productReducer = productSlice.reducer
