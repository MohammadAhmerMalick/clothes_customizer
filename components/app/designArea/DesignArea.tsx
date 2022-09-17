import { FC, useEffect, useState } from 'react'

import S from './DesignArea.module.scss'
import { getProducts } from '../../../network/apiCalls'
import ProductShowcase from './productShowcase/ProductShowcase'
import ProductSides from './productSides/ProductSides'

const DesignArea: FC = () => {
  const [image, setImage] = useState({
    selectedSide: '',
    selectedImage: {
      front: '',
      back: '',
      left: '',
      right: '',
    },
    data: [],
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
    <div className={S.designArea}>
      <ProductShowcase image={image.selectedSide} />
      <ProductSides image={image.selectedImage} />
    </div>
  )
}

export default DesignArea
