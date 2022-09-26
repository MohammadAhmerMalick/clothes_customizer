import { FC, useState } from 'react'

import S from './UploadImage.module.scss'
import Dropzone from '../../../../common/dropzone/Dropzone'
import CustomImage from '../../../../common/customImage/CustomImageInterface'
import { SIDE_PANEL_IMAGE_MAX_WIDTH } from '../../../../../utils/constants'
import { uuid } from '../../../../../utils/utilsFunctions'
import { FileWIthPathObject } from '../../../../../ts/interface'
import Button from '../../../../common/buttons/Button'

const UploadImage: FC = () => {
  const [fileList, setFileList] = useState<FileWIthPathObject[]>([])

  const handleRemoveImage = (fileObject: FileWIthPathObject) => {
    setFileList(fileList.filter((object) => object.id !== fileObject.id))
  }

  const handleSideLabelChange = (
    fileObject: FileWIthPathObject,
    value: string
  ) => {
    setFileList((state) =>
      state.map((object) =>
        object.id === fileObject.id ? { ...object, sideLabel: value } : object
      )
    )
  }

  const handleSelectFiles = (incommingFiles: File[]) => {
    const files = incommingFiles.map((file) => ({
      file,
      id: uuid(),
      previewURL: URL.createObjectURL(file),
      sideLabel: '',
    }))
    setFileList((state) => (state.length ? [...state, ...files] : files))
  }

  return (
    <div className={S.uploadImage}>
      <Dropzone selectFiles={handleSelectFiles} />

      <div className={S.sidesPreview}>
        {fileList
          .filter((fileObject) => fileObject.sideLabel)
          .map((fileObject) => (
            <div key={fileObject.id} className="productsSides">
              <p>{fileObject.sideLabel}</p>
              <CustomImage
                src={fileObject.previewURL}
                alt={fileObject.sideLabel || 'Side'}
                height={70}
                width={70}
              />
            </div>
          ))}
      </div>

      {fileList.map((fileObject) => (
        <div key={fileObject.id}>
          {fileObject.file.path} - {fileObject.file.size} bytes
          <CustomImage
            src={fileObject.previewURL}
            alt="Product"
            height={SIDE_PANEL_IMAGE_MAX_WIDTH}
            width={SIDE_PANEL_IMAGE_MAX_WIDTH}
          />
          <Button
            label="Remove image"
            onClick={() => handleRemoveImage(fileObject)}
          />
          <select
            onChange={(e) => handleSideLabelChange(fileObject, e.target.value)}
          >
            <option value="left">left</option>
            <option value="right">right</option>
            <option value="up">up</option>
            <option value="down">down</option>
          </select>
        </div>
      ))}
    </div>
  )
}

export default UploadImage
