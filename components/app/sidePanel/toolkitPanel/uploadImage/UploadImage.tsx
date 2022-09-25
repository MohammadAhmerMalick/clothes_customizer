import { FC, useState } from 'react'

import S from './UploadImage.module.scss'
import Dropzone from '../../../../common/dropzone/Dropzone'
import CustomImage from '../../../../common/customImage/CustomImageInterface'
import { SIDE_PANEL_IMAGE_MAX_WIDTH } from '../../../../../utils/constants'
import { uuid } from '../../../../../utils/utilsFunctions'
import { FileWIthPathObject } from '../../../../../ts/interface'

const UploadImage: FC = () => {
  const [fileList, setFileList] = useState<FileWIthPathObject[]>([])

  const handleSelectFiles = (incommingFiles: File[]) => {
    const files = incommingFiles.map((file) => ({ file, id: uuid() }))
    setFileList((state) => (state.length ? [...state, ...files] : files))
  }

  return (
    <div className={S.uploadImage}>
      <Dropzone selectFiles={handleSelectFiles} />

      {fileList.map((fileObject) => (
        <div key={fileObject.id}>
          {fileObject.file.path} - {fileObject.file.size} bytes
          <CustomImage
            src={URL.createObjectURL(fileObject.file)}
            alt="Product"
            height={SIDE_PANEL_IMAGE_MAX_WIDTH}
            width={SIDE_PANEL_IMAGE_MAX_WIDTH}
          />
        </div>
      ))}
    </div>
  )
}

export default UploadImage
