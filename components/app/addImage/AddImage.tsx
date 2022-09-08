import Image from 'next/image'
import classNames from 'classnames'
import { RiSearch2Line } from 'react-icons/ri'
import { FC, KeyboardEvent, useState } from 'react'
import { IoMdSquareOutline } from 'react-icons/io'
import { BiGridAlt } from 'react-icons/bi'

import S from './AddImage.module.scss'
import Input from '../../common/inputs/Input'
import IconButton from '../../common/buttons/IconButton'
import { useAppDispatch, useAppSelector } from '../../../store'
import { getUnSplashImagesAction } from '../../../store/slices/app/searchesSlice'

const AddImage: FC = () => {
  const dispatch = useAppDispatch()
  const { unSplashImages } = useAppSelector((state) => state.searchReducer)

  const [keyword, setKeyword] = useState('')
  const [itemPerColumn, setItemPerColumn] = useState<'single' | 'double'>(
    'single'
  )

  const handleChange = (value: string) => {
    setKeyword(value)
  }

  const handleKeyDown = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') dispatch(getUnSplashImagesAction(keyword))
  }

  return (
    <div className={S.addImage}>
      <Input
        type="text"
        placeholder="Keyword"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        Icon={RiSearch2Line}
      />

      <div className={S.alignmentContainer}>
        <IconButton
          title="single"
          className={classNames(S.button, {
            [S.active]: itemPerColumn === 'single',
          })}
          onClick={() => setItemPerColumn('single')}
        >
          <IoMdSquareOutline className={S.icon} />
        </IconButton>
        <IconButton
          title="double"
          className={classNames(S.button, {
            [S.active]: itemPerColumn === 'double',
          })}
          onClick={() => setItemPerColumn('double')}
        >
          <BiGridAlt className={S.icon} />
        </IconButton>
      </div>
      <div className={classNames(S.imageContainer, S[itemPerColumn])}>
        {unSplashImages.data.map((image) => (
          <div key={image.id} className={S.image}>
            <div
              className={S.imageBox}
              style={{ backgroundColor: image.color }}
            >
              <Image
                src={image.urls.small}
                alt="cat"
                width={image.width / (image.width / 400)}
                height={image.height / (image.width / 400)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddImage
