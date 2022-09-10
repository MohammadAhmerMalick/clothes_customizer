import { FC } from 'react'
import Image from 'next/image'

import S from './ProductShowcase.module.scss'

const ProductShowcase: FC<{ image: any }> = ({ image }) => {
  return (
    <div className={S.productShowcase}>
      <Image src={image.front} alt="front" />
    </div>
  )
}

export default ProductShowcase
