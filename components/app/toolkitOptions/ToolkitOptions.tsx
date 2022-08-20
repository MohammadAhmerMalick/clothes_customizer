import { FC } from 'react'
import classNames from 'classnames'
import { BsTextareaT } from 'react-icons/bs'
import { AiOutlineCloudUpload, AiOutlinePicture } from 'react-icons/ai'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { FiSettings, FiSun } from 'react-icons/fi'
import { MdOutlineDarkMode } from 'react-icons/md'

import S from './ToolkitOptions.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store'
import { ThemeModes, ToolkitOptionButtonTitle } from '../../../ts/enum'
import { changeTheme } from '../../../store/slices/app/UISlice'
import { ToolkitOptionButtonInterface } from '../../../ts/interface'
import { updateSidePanelState } from '../../../store/slices/app/sidePanelSlice'

const ToolkitOptions: FC = () => {
  const { theme } = useAppSelector((state) => state.UIReducer)
  const { selected } = useAppSelector((state) => state.sidePanelReducer)
  const dispatch = useAppDispatch()

  const handleCLick = (title: string) => {
    dispatch(
      updateSidePanelState({
        selected: title,
        toolkitPanelTitle: title,
      })
    )
  }

  const toolkitOptionButtons: ToolkitOptionButtonInterface[] = [
    { title: ToolkitOptionButtonTitle.ADD_TEXT, Icon: BsTextareaT },
    {
      title: ToolkitOptionButtonTitle.ADD_IMAGE,
      Icon: AiOutlinePicture,
    },
    {
      title: ToolkitOptionButtonTitle.UPLOAD_IMAGE,
      Icon: AiOutlineCloudUpload,
    },
    {
      title: ToolkitOptionButtonTitle.COLOR,
      Icon: IoColorPaletteOutline,
    },
  ]

  return (
    <div className={S.toolkitOptions}>
      {/* top icons */}
      <div className={S.top}>
        {toolkitOptionButtons.map(({ title, Icon }) => (
          <button
            key={title}
            type="button"
            title={title}
            className={classNames(S.iconContainer, {
              [S.active]: selected === title,
            })}
            onClick={() => handleCLick(title)}
          >
            <Icon className={S.icon} />
          </button>
        ))}
      </div>

      {/* button icons */}
      <div className={S.bottom}>
        {theme === ThemeModes.LIGHT ? (
          <button
            type="button"
            className={S.iconContainer}
            onClick={() => dispatch(changeTheme(ThemeModes.DARK))}
          >
            <MdOutlineDarkMode className={S.icon} />
          </button>
        ) : (
          <button
            type="button"
            className={S.iconContainer}
            onClick={() => dispatch(changeTheme(ThemeModes.LIGHT))}
          >
            <FiSun className={S.icon} />
          </button>
        )}
        <button type="button" className={S.iconContainer}>
          <FiSettings className={S.icon} />
        </button>
      </div>
    </div>
  )
}

export default ToolkitOptions
