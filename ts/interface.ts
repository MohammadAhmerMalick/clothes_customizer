import { ChangeEvent, KeyboardEvent, ReactNode } from 'react'
import { IconType } from 'react-icons'

import { ThemeModes } from './enum'

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

/* *********
  COMPONENTS
 ********* */

export interface LayoutProps {
  children: ReactNode
}

export interface InputInterface {
  type: 'text' | 'email'
  placeholder?: string
  onChange?(value: string): void
  onKeyDown?(e: KeyboardEvent): void
  Icon?: IconType
}

export interface IconButtonInterface {
  title?: string
  className?: string
  onClick?(title?: string): void
  children: ReactNode
}
