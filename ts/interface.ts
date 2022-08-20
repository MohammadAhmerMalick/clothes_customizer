import { ReactNode } from 'react'
import { IconType } from 'react-icons'
import { ThemeModes } from './enum'

export interface LayoutProps {
  children: ReactNode
}

// slices
export interface UISliceInterface {
  theme: ThemeModes.LIGHT | ThemeModes.DARK
}

export interface sidePanelSliceInterface {
  selected: string
  toolkitPanelTitle: string
}

// toolkitOption
export interface ToolkitOptionButtonInterface {
  title: string
  Icon: IconType
}
