import { FC, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { AiOutlineCloudUpload } from 'react-icons/ai'

import { DropzoneInterface } from '../../../ts/interface'

import S from './Dropzone.module.scss'

const Dropzone: FC<DropzoneInterface> = ({ selectFiles }) => {
  const onDrop = useCallback(
    (files: File[]) => {
      selectFiles(files)
    },
    [selectFiles]
  )

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className={S.dropzone}>
      <div {...getRootProps({ className: S.dropzoneArea })}>
        <AiOutlineCloudUpload size={80} className={S.icon} />
        <input {...getInputProps()} />
        <p>Upload product images</p>
      </div>
    </div>
  )
}

export default Dropzone
