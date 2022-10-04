import { FC } from 'react'
import classNames from 'classnames'
import { BsTextareaT } from 'react-icons/bs'
import { AiOutlineCloudUpload, AiOutlinePicture } from 'react-icons/ai'
import { IoColorPaletteOutline, IoShirtOutline } from 'react-icons/io5'
import { FiSettings, FiSun } from 'react-icons/fi'
import { MdOutlineDarkMode } from 'react-icons/md'

import S from './ToolkitOptions.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { ThemeColorsEnum, ToolkitOptionsListEnum } from '../../../../ts/enum'
import { changeTheme } from '../../../../store/slices/app/UISlice'
import { ToolkitOptionButtonInterface } from '../../../../ts/interface'
import { setSelected } from '../../../../store/slices/app/sidePanelSlice'
import IconButton from '../../../common/buttons/iconButton/IconButton'

const ToolkitOptions: FC = () => {
  const { themeColor } = useAppSelector((state) => state.UIReducer)
  const { selected } = useAppSelector((state) => state.sidePanelReducer)
  const dispatch = useAppDispatch()

  const toolkitOptionButtons: ToolkitOptionButtonInterface[] = [
    { title: ToolkitOptionsListEnum.ADD_TEXT, Icon: BsTextareaT },
    {
      title: ToolkitOptionsListEnum.ADD_IMAGE,
      Icon: AiOutlinePicture,
    },
    {
      title: ToolkitOptionsListEnum.UPLOAD_IMAGE,
      Icon: AiOutlineCloudUpload,
    },
    {
      title: ToolkitOptionsListEnum.SELECT_PRODUCT,
      Icon: IoShirtOutline,
    },
    {
      title: ToolkitOptionsListEnum.COLOR,
      Icon: IoColorPaletteOutline,
    },
  ]

  const handleCLick = (title: ToolkitOptionsListEnum) => {
    dispatch(setSelected(title))
  }

  return (
    <div className={S.toolkitOptions}>
      {/* top icons */}
      <div className={S.top}>
        {toolkitOptionButtons.map(({ title, Icon }) => (
          <IconButton
            key={title}
            title={title}
            className={classNames(S.button)}
            isActive={selected === title}
            onClick={handleCLick}
            Icon={Icon}
          />
        ))}
      </div>

      {/* button icons */}
      <div className={S.bottom}>
        {themeColor === ThemeColorsEnum.LIGHT ? (
          <IconButton
            className={S.button}
            onClick={() => dispatch(changeTheme(ThemeColorsEnum.DARK))}
            Icon={MdOutlineDarkMode}
          />
        ) : (
          <IconButton
            className={S.button}
            onClick={() => dispatch(changeTheme(ThemeColorsEnum.LIGHT))}
            Icon={FiSun}
          />
        )}

        <IconButton className={S.button} Icon={FiSettings} />
      </div>
    </div>
  )
}

export default ToolkitOptions
