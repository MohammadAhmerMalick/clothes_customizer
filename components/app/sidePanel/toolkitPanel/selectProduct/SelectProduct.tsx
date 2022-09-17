import classNames from 'classnames'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

import S from './SelectProduct.module.scss'
import { getProducts } from '../../../../../network/apiCalls'
import ImageAlignmentoptions from '../../../../common/ImageLayoutOptions/ImageLayoutOptions'
import { useAppSelector } from '../../../../../store'

const SelectProduct: FC = () => {
  const { imageLayoutOption } = useAppSelector(
    (state) => state.sidePanelReducer
  )

  const [image, setImage] = useState({
    selectedSide: '',
    selectedImage: {
      front: '',
      back: '',
      left: '',
      right: '',
    },
    data: [
      {
        front: '',
        back: '',
        left: '',
        right: '',
      },
    ],
  })

  const x = async () => {
    try {
      const data = await getProducts()

      setImage((oldState) => ({
        ...oldState,
        selectedSide: data[0].front,
        selectedImage: data[0],
        data,
      }))
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    x()
  }, [])

  return (
    <div className={S.selectProduct}>
      <ImageAlignmentoptions />
      <div className={classNames(S.products, S[imageLayoutOption])}>
        {image.data.map((product) => (
          <div key={product.front}>
            <Image src={product.front} alt="Product" width={400} height={400} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectProduct
