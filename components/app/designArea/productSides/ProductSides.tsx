import { FC } from 'react'

import S from './ProductSides.module.scss'
import { useAppSelector } from '../../../../store'
import { ProductSideThumbnailInterface } from '../../../../ts/interface'
import {
  IMAGE_PLACEHOLDER,
  PRODUCT_SIDES_THUMBNAIL_IMAGE_MAX_WIDTH,
} from '../../../../utils/constants'
import CustomImage from '../../../common/customImage/CustomImageInterface'

const ImageContainer: FC<ProductSideThumbnailInterface> = ({ link }) => {
  if (link)
    return (
      <div className={S.imageContainer}>
        <CustomImage
          src={link || IMAGE_PLACEHOLDER}
          alt="front"
          width={PRODUCT_SIDES_THUMBNAIL_IMAGE_MAX_WIDTH}
          height={PRODUCT_SIDES_THUMBNAIL_IMAGE_MAX_WIDTH}
        />
      </div>
    )
  return <></>
}

const ProductSides: FC = () => {
  const {
    data: { selectedProduct },
  } = useAppSelector((state) => state.productReducer)

  return (
    <div className={S.productSides}>
      <ImageContainer link={selectedProduct.front.scaledLink} />
      <ImageContainer link={selectedProduct.back.scaledLink} />
      <ImageContainer link={selectedProduct.left.scaledLink} />
      <ImageContainer link={selectedProduct.right.scaledLink} />
    </div>
  )
}

export default ProductSides
