import classNames from 'classnames'
import { FC, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

import S from './UploadImage.module.scss'
import Dropzone from '../../../../common/dropzone/Dropzone'
import CustomImage from '../../../../common/customImage/CustomImageInterface'
import { capitalize, uuid } from '../../../../../utils/utilsFunctions'
import {
  FileWIthPathObject,
  SelectOptionInterface,
} from '../../../../../ts/interface'
import IconButton from '../../../../common/buttons/iconButton/IconButton'
import Select from '../../../../common/form/select/Select'
import Button from '../../../../common/buttons/Button'
import ImageAlignmentoptions from '../../../../common/ImageLayoutOptions/ImageLayoutOptions'
import { useAppSelector } from '../../../../../store'

const options = [
  { label: 'front', value: 'front' },
  { label: 'back', value: 'back' },
  { label: 'left', value: 'left' },
  { label: 'right', value: 'right' },
]

const UploadImage: FC = () => {
  const { imageLayoutOption } = useAppSelector(
    (state) => state.sidePanelReducer
  )

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

  const isSideSelected = () =>
    !!fileList.filter((fileObject) => fileObject.sideLabel).length

  return (
    <div className={S.uploadImage}>
      <Dropzone selectFiles={handleSelectFiles} slim />

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

      <div className={S.controls}>
        <Button
          primary
          disabled={!isSideSelected()}
          title={
            isSideSelected()
              ? 'Upload Product'
              : 'Assign a side to any selected image'
          }
        >
          Upload Product
        </Button>
        <ImageAlignmentoptions />
      </div>

      <div className={classNames(S.filesListContainer, S[imageLayoutOption])}>
        {fileList.map((fileObject) => (
          <div key={fileObject.id}>
            <div className={S.imageContainer}>
              <CustomImage
                src={fileObject.previewURL}
                alt={fileObject.file.name}
              />
              <div className={S.overlay}>
                <IconButton
                  Icon={IoCloseOutline}
                  title="Remove Image"
                  onClick={() => handleRemoveImage(fileObject)}
                  className={S.closeButton}
                  danger={!!fileObject.sideLabel}
                />
              </div>
            </div>
            <Select
              label={fileObject.sideLabel || 'Select side'}
              externalLabel
              onChange={(option) => handleSelectSide(fileObject, option)}
              options={options}
              dropUp
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UploadImage
