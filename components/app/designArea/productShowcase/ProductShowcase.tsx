import { FC } from 'react'
import Image from 'next/image'

import S from './ProductShowcase.module.scss'
import { useAppSelector } from '../../../../store'
import {
  ARTBOARD_IMAGE_MAX_WIDTH,
  IMAGE_PLACEHOLDER,
} from '../../../../utils/constants'

const ProductShowcase: FC = () => {
  const {
    data: { selectedSide, selectedProduct },
  } = useAppSelector((state) => state.productReducer)

  return (
    <div className={S.selectedSide}>
      {selectedProduct[selectedSide] && (
        <Image
          src={selectedProduct[selectedSide].originalLink || IMAGE_PLACEHOLDER}
          alt="Design"
          width={ARTBOARD_IMAGE_MAX_WIDTH}
          height={ARTBOARD_IMAGE_MAX_WIDTH}
        />
      )}
    </div>
  )
}

export default ProductShowcase
