import React, { FC } from 'react'
import classNames from 'classnames'

import S from './IconButton.module.scss'
import { IconButtonInterface } from '../../../ts/interface'

const IconButton: FC<IconButtonInterface> = ({
  title,
  className,
  onClick,
  children,
}) => {
  const handleClick = () => {
    if (!title && onClick) onClick()
    else if (title && onClick) onClick(title)
  }
  return (
    <button
      type="button"
      title={title}
      className={classNames(S.iconContainer, className)}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default IconButton
