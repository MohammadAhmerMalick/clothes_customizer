import { FC } from 'react'

import { LayoutProps } from '../../ts/interface'

const WebsiteLayout: FC<LayoutProps> = ({ children }) => {
  return <div>website{children}</div>
}

export default WebsiteLayout
