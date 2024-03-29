import classNames from 'classnames'
import { RiSearch2Line } from 'react-icons/ri'
import { FC, KeyboardEvent, useState } from 'react'

import S from './AddImage.module.scss'
import Input from '../../../../common/form/inputs/Input'
import IconButton from '../../../../common/buttons/iconButton/IconButton'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import { getUnSplashImagesAction } from '../../../../../store/slices/app/searchesSlice'
import LoadingCircle from '../../../../common/loading/LoadingCircle'
import ImageAlignmentoptions from '../../../../common/ImageLayoutOptions/ImageLayoutOptions'
import { SIDE_PANEL_IMAGE_MAX_WIDTH } from '../../../../../utils/constants'
import CustomImage from '../../../../common/customImage/CustomImageInterface'
import { toaster } from '../../../../../utils/utilsFunctions'

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

  const search = () => {
    if (!keyword) {
      toaster.info('Please write keyword to search')
      return
    }
    if (!loading) dispatch(getUnSplashImagesAction(keyword))
  }

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
          Icon={loading ? LoadingCircle : RiSearch2Line}
          onClick={search}
          isActive
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
              <CustomImage
                src={image.urls.small}
                alt={keyword}
                width={image.width / (image.width / SIDE_PANEL_IMAGE_MAX_WIDTH)}
                height={
                  image.height / (image.width / SIDE_PANEL_IMAGE_MAX_WIDTH)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddImage
