import { FC, useState } from 'react'

import S from './UploadImage.module.scss'
import Dropzone from '../../../../common/dropzone/Dropzone'
import CustomImage from '../../../../common/customImage/CustomImageInterface'
import { SIDE_PANEL_IMAGE_MAX_WIDTH } from '../../../../../utils/constants'
import { uuid } from '../../../../../utils/utilsFunctions'
import {
  FileWIthPathObject,
  SelectOptionInterface,
} from '../../../../../ts/interface'
import Button from '../../../../common/buttons/Button'
import Select from '../../../../common/form/select/Select'

const options = [
  { label: 'Left', value: 'Left' },
  { label: 'Right', value: 'Right' },
  { label: 'Up', value: 'Up' },
  { label: 'Down', value: 'Down' },
]

const UploadImage: FC = () => {
  const [fileList, setFileList] = useState<FileWIthPathObject[]>([])

  const handleRemoveImage = (fileObject: FileWIthPathObject) => {
    setFileList(fileList.filter((object) => object.id !== fileObject.id))
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

  const handleSelectSide = (
    fileObject: FileWIthPathObject,
    option: SelectOptionInterface[]
  ) => {
    const sideLabel = option[0].value
    setFileList((state) =>
      state.map(
        (object) =>
          object.id === fileObject.id // on same id
            ? { ...object, sideLabel } // update side
            : object.sideLabel === sideLabel // same side
            ? { ...object, sideLabel: '' } // remove old object side
            : object // return as it is
      )
    )
  }

  console.log({ fileList })
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
          <CustomImage
            src={fileObject.previewURL}
            alt="Product"
            height={SIDE_PANEL_IMAGE_MAX_WIDTH}
            width={SIDE_PANEL_IMAGE_MAX_WIDTH}
          />
          <div className={S.actionsContainer}>
            <Button onClick={() => handleRemoveImage(fileObject)}>
              Remove image
            </Button>
            <Select
              label={fileObject.sideLabel}
              externalLabel
              onChange={(option) => handleSelectSide(fileObject, option)}
              options={options}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default UploadImage
