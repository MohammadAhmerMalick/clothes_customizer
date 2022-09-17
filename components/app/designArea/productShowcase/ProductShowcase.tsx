import { FC } from 'react'
import Image from 'next/image'

import S from './ProductShowcase.module.scss'

const ProductShowcase: FC<{ image: string }> = ({ image }) => {
  return (
    <div className={S.productShowcase}>
      {image && <Image src={image} alt="Design" width={800} height={800} />}
    </div>
  )
}

export default ProductShowcase
