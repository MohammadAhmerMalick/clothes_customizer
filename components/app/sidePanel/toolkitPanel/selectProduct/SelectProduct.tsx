import classNames from 'classnames'
import Image from 'next/image'
import React, { FC, useEffect } from 'react'

import S from './SelectProduct.module.scss'
import ImageAlignmentoptions from '../../../../common/ImageLayoutOptions/ImageLayoutOptions'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import { getProductsAction } from '../../../../../store/slices/app/productSlice'

const SelectProduct: FC = () => {
  const dispatch = useAppDispatch()
  const { imageLayoutOption } = useAppSelector(
    (state) => state.sidePanelReducer
  )
  const { loading, data } = useAppSelector((state) => state.productReducer)

  useEffect(() => {
    dispatch(getProductsAction())
  }, [dispatch])

  return (
    <div className={S.selectProduct}>
      <ImageAlignmentoptions />

      {!loading && data && (
        <div className={classNames(S.products, S[imageLayoutOption])}>
          {data.allProducts.map((product) => (
            <div key={product.front}>
              {product.front && (
                <Image
                  src={product.front}
                  alt="Product"
                  width={400}
                  height={400}
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
