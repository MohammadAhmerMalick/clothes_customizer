import classNames from 'classnames'
import { FC } from 'react'

import S from './SelectProduct.module.scss'
import ImageAlignmentoptions from '../../../../common/ImageLayoutOptions/ImageLayoutOptions'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import { getProductsAction } from '../../../../../store/slices/app/productSlice'
import {
  IMAGE_PLACEHOLDER,
  SIDE_PANEL_IMAGE_MAX_WIDTH,
} from '../../../../../utils/constants'
import CustomImage from '../../../../common/customImage/CustomImageInterface'

const SelectProduct: FC = () => {
  const dispatch = useAppDispatch()
  const { imageLayoutOption } = useAppSelector(
    (state) => state.sidePanelReducer
  )
  const { loading, data } = useAppSelector((state) => state.productReducer)

  return (
    <div className={S.selectProduct}>
      <ImageAlignmentoptions />
      <button type="button" onClick={() => dispatch(getProductsAction())}>
        getProducts
      </button>

      {!loading && data && (
        <div className={classNames(S.products, S[imageLayoutOption])}>
          {data.allProducts.map((product) => (
            <div key={product.id}>
              {product.front && (
                <CustomImage
                  src={IMAGE_PLACEHOLDER}
                  alt="Product"
                  width={SIDE_PANEL_IMAGE_MAX_WIDTH}
                  height={SIDE_PANEL_IMAGE_MAX_WIDTH}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectProduct
