import { FC } from 'react'
import { BsTextareaT } from 'react-icons/bs'
import { AiOutlineCloudUpload, AiOutlinePicture } from 'react-icons/ai'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { FiSettings, FiSun } from 'react-icons/fi'
import { MdOutlineDarkMode } from 'react-icons/md'

import S from './ToolkitOptions.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store'
import { ThemeModes } from '../../../ts/enum'
import { changeTheme } from '../../../store/slices/app/UISlice'

const ToolkitOptions: FC = () => {
  const { theme } = useAppSelector((state) => state.UIReducer)
  const dispatch = useAppDispatch()

  return (
    <div className={S.toolkitOptions}>
      <div className={S.top}>
        <button type="button" className={S.iconContainer}>
          <BsTextareaT className={S.icon} />
        </button>
        <button type="button" className={S.iconContainer}>
          <AiOutlinePicture className={S.icon} />
        </button>
        <button type="button" className={S.iconContainer}>
          <AiOutlineCloudUpload className={S.icon} />
        </button>
        <button type="button" className={S.iconContainer}>
          <IoColorPaletteOutline className={S.icon} />
        </button>
      </div>
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
