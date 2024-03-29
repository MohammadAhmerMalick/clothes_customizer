import { FC } from 'react'

import S from './ProductShowcase.module.scss'
import { useAppSelector } from '../../../../store'
import { ARTBOARD_IMAGE_MAX_WIDTH } from '../../../../utils/constants'
import CustomImage from '../../../common/customImage/CustomImageInterface'

const ProductShowcase: FC = () => {
  const {
    data: { selectedSide, selectedProduct },
  } = useAppSelector((state) => state.productReducer)

  return (
    <div className={S.selectedSide}>
      {selectedProduct[selectedSide]?.originalLink && (
        <CustomImage
          src={selectedProduct[selectedSide]?.originalLink}
          alt="Design"
          width={ARTBOARD_IMAGE_MAX_WIDTH}
          height={ARTBOARD_IMAGE_MAX_WIDTH}
        />
      )}
    </div>
  )
}

export default ProductShowcase
