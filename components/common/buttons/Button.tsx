import { FC } from 'react'
import classNames from 'classnames'

import S from './Button.module.scss'
import { ButtonInterface } from '../../../ts/interface'

const Button: FC<ButtonInterface> = ({
  children,
  onClick,
  className,
  primary,
}) => {
  const handleOnclick = () => {
    if (!onClick) return

    onClick()
  }

  return (
    <button
      type="button"
      onClick={handleOnclick}
      className={classNames(S.button, { [S.primary]: primary }, className)}
    >
      {children}
    </button>
  )
}

export default Button
