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
      <div className={S.inputContainer}>
        <Input
          type="text"
          placeholder="Keyword"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <IconButton className={S.searchButton} Icon={RiSearch2Line} />
      </div>

      <div className={S.alignmentContainer}>
        <IconButton
          title="single"
          className={classNames(S.button)}
          isActive={itemPerColumn === 'single'}
          onClick={() => setItemPerColumn('single')}
          Icon={IoMdSquareOutline}
          IconClassName={S.icon}
        />
        <IconButton
          title="double"
          className={classNames(S.button)}
          isActive={itemPerColumn === 'double'}
          onClick={() => setItemPerColumn('double')}
          Icon={BiGridAlt}
          IconClassName={S.icon}
        />
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
                alt={keyword}
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