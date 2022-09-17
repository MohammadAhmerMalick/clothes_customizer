import Image from 'next/image'
import classNames from 'classnames'
import { RiSearch2Line } from 'react-icons/ri'
import { FC, KeyboardEvent, useState } from 'react'

import S from './AddImage.module.scss'
import Input from '../../../../common/inputs/Input'
import IconButton from '../../../../common/buttons/IconButton'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import { getUnSplashImagesAction } from '../../../../../store/slices/app/searchesSlice'
import LoadingCircle from '../../../../common/loading/LoadingCircle'
import ImageAlignmentoptions from '../../../../common/ImageLayoutOptions/ImageLayoutOptions'

const AddImage: FC = () => {
  const dispatch = useAppDispatch()
  const { loading, data } = useAppSelector(
    (state) => state.searchReducer.unSplashImages
  )
  const { imageLayoutOption } = useAppSelector(
    (state) => state.sidePanelReducer
  )

  const [keyword, setKeyword] = useState('')

  const handleChange = (value: string) => {
    setKeyword(value)
  }

  const search = () => !loading && dispatch(getUnSplashImagesAction(keyword))

  const handleKeyDown = async (e: KeyboardEvent) => {
    if (e.key === 'Enter') search()
  }

  return (
    <div className={S.addImage}>
      <div className={S.inputContainer}>
        <Input
          type="text"
          className={S.input}
          placeholder="Keyword"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <IconButton
          className={S.searchButton}
          Icon={loading ? LoadingCircle : RiSearch2Line}
          onClick={search}
          IconClassName={S.icon}
        />
      </div>
      <ImageAlignmentoptions />
      <div
        className={classNames(S.imageContainer, S[imageLayoutOption], {
          [S.loading]: loading,
        })}
      >
        {data.map((image) => (
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
