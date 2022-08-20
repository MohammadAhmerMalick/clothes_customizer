import { FC } from 'react'
import classNames from 'classnames'

import S from './AppLayout.module.scss'
import SidePanel from '../../app/sidePanel/Side_Panel'
import { LayoutProps } from '../../../ts/interface'
import { useAppSelector } from '../../../store'

const AppLayout: FC<LayoutProps> = ({ children }) => {
  const themeMode = useAppSelector((state) => state.UIReducer.theme)

  return (
    <main className={classNames(themeMode, S.appLayout)}>
      <SidePanel />
      {children}
    </main>
  )
}

export default AppLayout
