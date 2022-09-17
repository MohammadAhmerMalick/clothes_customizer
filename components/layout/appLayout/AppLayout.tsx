import { FC, useEffect } from 'react'
import classNames from 'classnames'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import S from './AppLayout.module.scss'
import SidePanel from '../../app/sidePanel/SidePanel'
import { LayoutProps, sidePanelSliceInterface } from '../../../ts/interface'
import { useAppDispatch, useAppSelector } from '../../../store'
import { changeTheme, UISlice } from '../../../store/slices/app/UISlice'
import { ThemeColors, ToolkitOptionsList } from '../../../ts/enum'
import {
  sidePanelSlice,
  setSelected,
  setImageLayoutOption,
} from '../../../store/slices/app/sidePanelSlice'

const AppLayout: FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { themeColor } = useAppSelector((state) => state.UIReducer)

  /** *******************
   * presetting the store
   ******************** */

  // theme
  useEffect(() => {
    dispatch(
      changeTheme(
        (localStorage.getItem('themeColor') as ThemeColors) ||
          UISlice.getInitialState().themeColor
      )
    )

    // selected sidePanel option
    dispatch(
      setSelected(
        (localStorage.getItem('selected') as ToolkitOptionsList) ||
          sidePanelSlice.getInitialState().selected
      )
    )

    // selected sidePanel image layout
    dispatch(
      setImageLayoutOption(
        (localStorage.getItem(
          'imageLayoutOption'
        ) as sidePanelSliceInterface['imageLayoutOption']) ||
          sidePanelSlice.getInitialState().imageLayoutOption
      )
    )
  }, [dispatch])

  return (
    <main className={classNames(themeColor, S.appLayout)}>
      <ToastContainer />
      <SidePanel />
      {children}
    </main>
  )
}

export default AppLayout
