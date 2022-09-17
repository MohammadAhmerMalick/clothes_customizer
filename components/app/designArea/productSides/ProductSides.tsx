import Image from 'next/image'
import { FC } from 'react'

import S from './ProductSides.module.scss'

interface Image {
  image: {
    front: string
    back: string
    left: string
    right: string
  }
}

const ProductSides: FC<Image> = ({ image }) => {
  const dimention = 70

  return (
    <div className={S.productSides}>
      <div className={S.imageContainer}>
        {image?.front && (
          <Image
            src={image.front}
            alt="front"
            width={dimention}
            height={dimention}
          />
        )}
      </div>
      <div className={S.imageContainer}>
        {image?.back && (
          <Image
            src={image.back}
            alt="back"
            width={dimention}
            height={dimention}
          />
        )}
      </div>
      <div className={S.imageContainer}>
        {image?.left && (
          <Image
            src={image.left}
            alt="left"
            width={dimention}
            height={dimention}
          />
        )}
      </div>
      <div className={S.imageContainer}>
        {image?.right && (
          <Image
            src={image.right}
            alt="right"
            width={dimention}
            height={dimention}
          />
        )}
      </div>
    </div>
  )
}

export default ProductSides
