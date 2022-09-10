import Image from 'next/image'
import { FC, useState } from 'react'

import S from './DesignArea.module.scss'
import ProductShowcase from './productShowcase/ProductShowcase'

import front from '../../../assets/images/tShirts/1/front.png'
import back from '../../../assets/images/tShirts/1/back.png'
import left from '../../../assets/images/tShirts/1/left.png'
import right from '../../../assets/images/tShirts/1/right.png'
import ProductSides from './productSides/ProductSides'

const DesignArea: FC = () => {
  const [image, setImage] = useState({
    front,
    back,
    left,
    right,
  })
  return (
    <div className={S.designArea}>
      <ProductShowcase image={image} />
      <ProductSides image={image} />
    </div>
  )
}

export default DesignArea
