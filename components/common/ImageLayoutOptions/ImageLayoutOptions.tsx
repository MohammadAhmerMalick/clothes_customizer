import { FC } from 'react'
import classNames from 'classnames'
import { BiGridAlt } from 'react-icons/bi'
import { IoMdSquareOutline } from 'react-icons/io'

import S from './ImageLayoutOptions.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setImageLayoutOption } from '../../../store/slices/app/sidePanelSlice'
import { ImageAlignmentoptionsEnum } from '../../../ts/enum'
import { SidePanelSliceInterface } from '../../../ts/interface'
import IconButton from '../buttons/IconButton'
import { capitalize } from '../../../utils/utilsFunctions'

const ImageAlignmentoptions: FC = () => {
  const dispatch = useAppDispatch()
  const { imageLayoutOption } = useAppSelector(
    (state) => state.sidePanelReducer
  )

  const setValue = (value: SidePanelSliceInterface['imageLayoutOption']) => {
    dispatch(setImageLayoutOption(value))
  }

  return (
    <div className={S.imageAlignmentoptions}>
      <IconButton
        title={capitalize(ImageAlignmentoptionsEnum.SINGLE)}
        className={classNames(S.button)}
        isActive={imageLayoutOption === ImageAlignmentoptionsEnum.SINGLE}
        onClick={() => setValue(ImageAlignmentoptionsEnum.SINGLE)}
        Icon={IoMdSquareOutline}
        IconClassName={S.icon}
      />
      <IconButton
        title={capitalize(ImageAlignmentoptionsEnum.DOUBLE)}
        className={classNames(S.button)}
        isActive={imageLayoutOption === ImageAlignmentoptionsEnum.DOUBLE}
        onClick={() => setValue(ImageAlignmentoptionsEnum.DOUBLE)}
        Icon={BiGridAlt}
        IconClassName={S.icon}
      />
    </div>
  )
}
export default ImageAlignmentoptions
