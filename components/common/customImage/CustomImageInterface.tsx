import Image from 'next/image'
import React, { FC, useState } from 'react'
import { CustomImageInterface } from '../../../ts/interface'
import { IMAGE_PLACEHOLDER } from '../../../utils/constants'

const CustomImage: FC<CustomImageInterface> = ({
  src,
  height,
  width,
  alt,
  placeholder,
}) => {
  const [imageSrc, setImageSrc] = useState(src || IMAGE_PLACEHOLDER)

  return (
    <Image
      src={imageSrc}
      height={height}
      width={width}
      alt={alt}
      onError={() => setImageSrc(placeholder || IMAGE_PLACEHOLDER)}
    />
  )
}

export default CustomImage
