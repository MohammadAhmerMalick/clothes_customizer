import Image from 'next/image'
import React, { FC, useState } from 'react'
import {
  CustomImageInterface,
  ImageNaturalDimensionInterface,
} from '../../../ts/interface'
import { IMAGE_PLACEHOLDER } from '../../../utils/constants'

const CustomImage: FC<CustomImageInterface> = ({
  src,
  height,
  width,
  alt,
  placeholder,
}) => {
  const [imageSrc, setImageSrc] = useState(src || IMAGE_PLACEHOLDER)
  const [dimension, setDimension] = useState<ImageNaturalDimensionInterface>({
    naturalHeight: 0,
    naturalWidth: 0,
  })

  const handleSetDimension = (
    naturalDimension: ImageNaturalDimensionInterface
  ) => {
    setDimension({
      naturalHeight: naturalDimension.naturalHeight,
      naturalWidth: naturalDimension.naturalWidth,
    })
  }

  return (
    <Image
      src={imageSrc}
      height={height || dimension.naturalHeight}
      width={width || dimension.naturalWidth}
      alt={alt}
      onError={() => setImageSrc(placeholder || IMAGE_PLACEHOLDER)}
      onLoadingComplete={handleSetDimension}
    />
  )
}

export default CustomImage
