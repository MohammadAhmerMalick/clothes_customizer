import { FC } from 'react'

import S from './UploadImage.module.scss'
import Dropzone from '../../../../common/dropzone/Dropzone'

const UploadImage: FC = () => {
  return (
    <div className={S.uploadImage}>
      <Dropzone />
    </div>
  )
}

export default UploadImage
