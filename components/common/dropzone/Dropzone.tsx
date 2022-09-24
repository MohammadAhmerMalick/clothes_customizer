import { FC } from 'react'
import { useDropzone, FileWithPath } from 'react-dropzone'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import CustomImage from '../customImage/CustomImageInterface'

import S from './Dropzone.module.scss'

const Dropzone: FC = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

  return (
    <div className={S.dropzone}>
      <div {...getRootProps({ className: S.dropzoneArea })}>
        <AiOutlineCloudUpload size={80} className={S.icon} />
        <input {...getInputProps()} />
        <p>Upload product images</p>
      </div>
      {acceptedFiles.map((file: FileWithPath) => (
        <div key={file.path}>
          {file.path} - {file.size} bytes
          <CustomImage
            src={URL.createObjectURL(file)}
            alt="Product"
            height={300}
            width={300}
          />
        </div>
      ))}
    </div>
  )
}

export default Dropzone
