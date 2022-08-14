import { FC } from 'react'
import classNames from 'classnames'

import S from './AppLayout.module.scss'
import Sidepanel from '../../app/sIdepanel/Sidepanel'
import { LayoutProps } from '../../../ts/interface'
import { useAppSelector } from '../../../store'

const AppLayout: FC<LayoutProps> = ({ children }) => {
  const themeMode = useAppSelector((state) => state.UIReducer.theme)

  return (
    <main className={classNames(themeMode, S.appLayout)}>
      <Sidepanel />
      {children}
    </main>
  )
}

export default AppLayout
