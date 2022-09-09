import React, { FC } from 'react'
import classNames from 'classnames'

import S from './IconButton.module.scss'
import { IconButtonInterface } from '../../../ts/interface'

const IconButton: FC<IconButtonInterface> = ({
  title,
  className,
  onClick,
  Icon,
  isActive,
  IconClassName,
}) => {
  const handleClick = () => {
    if (!title && onClick) onClick()
    else if (title && onClick) onClick(title)
  }
  return (
    <button
      type="button"
      title={title}
      className={classNames(
        S.iconContainer,
        { [S.active]: isActive },
        className
      )}
      onClick={handleClick}
    >
      <Icon className={classNames(S.icon, IconClassName)} />
    </button>
  )
}

export default IconButton
