import classNames from 'classnames'
import { FC, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { AiOutlineCloudUpload } from 'react-icons/ai'

import { DropzoneInterface } from '../../../ts/interface'

import S from './Dropzone.module.scss'

const Dropzone: FC<DropzoneInterface> = ({ selectFiles, className, slim }) => {
  const onDrop = useCallback(
    (files: File[]) => {
      selectFiles(files)
    },
    [selectFiles]
  )

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className={classNames(S.dropzone, className)}>
      <div
        {...getRootProps({
          className: classNames(S.dropzoneArea, { [S.slim]: slim }),
        })}
      >
        <AiOutlineCloudUpload size={slim ? 30 : 80} className={S.icon} />
        <input {...getInputProps()} />
        <p>Upload product images</p>
      </div>
    </div>
  )
}

export default Dropzone
