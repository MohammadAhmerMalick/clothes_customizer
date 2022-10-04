import { FC } from 'react'

import S from './ProductSides.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { PRODUCT_SIDES_THUMBNAIL_IMAGE_MAX_WIDTH } from '../../../../utils/constants'
import CustomImage from '../../../common/customImage/CustomImageInterface'
import { ProductsSidesEnum } from '../../../../ts/enum'
import { selectProductSideAction } from '../../../../store/slices/app/productSlice'

interface prop {
  side: ProductsSidesEnum
}

const ImageContainer: FC<prop> = ({ side }) => {
  const dispatch = useAppDispatch()

  const {
    data: { selectedProduct },
  } = useAppSelector((state) => state.productReducer)

  const handleProductSideSelect = () => {
    dispatch(selectProductSideAction(side))
  }

  if (selectedProduct[side]?.scaledLink)
    return (
      <div className={S.imageContainer}>
        <CustomImage
          src={selectedProduct[side]?.scaledLink}
          alt="front"
          width={PRODUCT_SIDES_THUMBNAIL_IMAGE_MAX_WIDTH}
          height={PRODUCT_SIDES_THUMBNAIL_IMAGE_MAX_WIDTH}
          className={S.image}
          onClick={handleProductSideSelect}
        />
      </div>
    )
  return <></>
}

const ProductSides: FC = () => {
  return (
    <div className={S.productSides}>
      {Object.values(ProductsSidesEnum).map((side) => (
        <ImageContainer key={side} side={side} />
      ))}
    </div>
  )
}

export default ProductSides
