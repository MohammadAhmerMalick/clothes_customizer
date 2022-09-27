import { FC, useState } from 'react'

import S from './UploadImage.module.scss'
import Dropzone from '../../../../common/dropzone/Dropzone'
import CustomImage from '../../../../common/customImage/CustomImageInterface'
import { capitalize, uuid } from '../../../../../utils/utilsFunctions'
import {
  FileWIthPathObject,
  SelectOptionInterface,
} from '../../../../../ts/interface'
import Button from '../../../../common/buttons/Button'
import Select from '../../../../common/form/select/Select'

const options = [
  { label: 'front', value: 'front' },
  { label: 'back', value: 'back' },
  { label: 'left', value: 'left' },
  { label: 'right', value: 'right' },
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

  return (
    <div className={S.uploadImage}>
      <Dropzone selectFiles={handleSelectFiles} />

      <div className={S.sidesPreview}>
        {fileList
          .filter((fileObject) => fileObject.sideLabel)
          .map((fileObject) => (
            <div key={fileObject.id} className={S.sidesPreviewImageContainer}>
              <CustomImage
                src={fileObject.previewURL}
                alt={fileObject.sideLabel || fileObject.file.name}
                height={70}
                width={70}
              />
              <p className={S.overlay}>{capitalize(fileObject.sideLabel)}</p>
            </div>
          ))}
      </div>

      {fileList.map((fileObject) => (
        <div key={fileObject.id}>
          <CustomImage src={fileObject.previewURL} alt={fileObject.file.name} />
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
