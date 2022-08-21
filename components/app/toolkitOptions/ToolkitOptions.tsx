import { FC } from 'react'
import classNames from 'classnames'
import { BsTextareaT } from 'react-icons/bs'
import { AiOutlineCloudUpload, AiOutlinePicture } from 'react-icons/ai'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { FiSettings, FiSun } from 'react-icons/fi'
import { MdOutlineDarkMode } from 'react-icons/md'

import S from './ToolkitOptions.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store'
import { ThemeModes, ToolkitOptionsList } from '../../../ts/enum'
import { changeTheme } from '../../../store/slices/app/UISlice'
import { ToolkitOptionButtonInterface } from '../../../ts/interface'
import { updateSidePanelState } from '../../../store/slices/app/sidePanelSlice'
import IconButton from '../../common/buttons/IconButton'

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
    { title: ToolkitOptionsList.ADD_TEXT, Icon: BsTextareaT },
    {
      title: ToolkitOptionsList.ADD_IMAGE,
      Icon: AiOutlinePicture,
    },
    {
      title: ToolkitOptionsList.UPLOAD_IMAGE,
      Icon: AiOutlineCloudUpload,
    },
    {
      title: ToolkitOptionsList.COLOR,
      Icon: IoColorPaletteOutline,
    },
  ]

  return (
    <div className={S.toolkitOptions}>
      {/* top icons */}
      <div className={S.top}>
        {toolkitOptionButtons.map(({ title, Icon }) => (
          <IconButton
            key={title}
            title={title}
            className={classNames(S.button, {
              [S.active]: selected === title,
            })}
            onClick={handleCLick}
          >
            <Icon className={S.icon} />
          </IconButton>
        ))}
      </div>

      {/* button icons */}
      <div className={S.bottom}>
        {theme === ThemeModes.LIGHT ? (
          <IconButton
            className={S.button}
            onClick={() => dispatch(changeTheme(ThemeModes.DARK))}
          >
            <MdOutlineDarkMode className={S.icon} />
          </IconButton>
        ) : (
          <IconButton
            className={S.button}
            onClick={() => dispatch(changeTheme(ThemeModes.LIGHT))}
          >
            <FiSun className={S.icon} />
          </IconButton>
        )}

        <IconButton className={S.button}>
          <FiSettings className={S.icon} />
        </IconButton>
      </div>
    </div>
  )
}

export default ToolkitOptions
