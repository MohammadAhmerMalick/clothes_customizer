import Image from 'next/image'
import { FC } from 'react'
import S from './ProductSides.module.scss'

const ProductSides: FC<{ image: any }> = ({ image }) => {
  const dimention = 70

  return (
    <div className={S.productSides}>
      <div className={S.imageContainer}>
        <Image
          src={image.front}
          alt="front"
          width={image.front.width / (image.front.width / dimention)}
          height={image.front.height / (image.front.width / dimention)}
        />
      </div>
      <div className={S.imageContainer}>
        <Image
          src={image.back}
          alt="back"
          width={image.back.width / (image.back.width / dimention)}
          height={image.back.height / (image.back.width / dimention)}
        />
      </div>
      <div className={S.imageContainer}>
        <Image
          src={image.left}
          alt="left"
          width={image.left.width / (image.left.width / dimention)}
          height={image.left.height / (image.left.width / dimention)}
        />
      </div>
      <div className={S.imageContainer}>
        <Image
          src={image.right}
          alt="right"
          width={image.right.width / (image.right.width / dimention)}
          height={image.right.height / (image.right.width / dimention)}
        />
      </div>
    </div>
  )
}

export default ProductSides
