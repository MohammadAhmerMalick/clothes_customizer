import { FC } from 'react'
import classNames from 'classnames'

import S from './Button.module.scss'
import { ButtonInterface } from '../../../ts/interface'

const Button: FC<ButtonInterface> = ({
  title,
  children,
  onClick,
  className,
  primary,
  disabled,
  bordered,
}) => {
  const handleOnclick = () => {
    if (!onClick) return

    onClick()
  }
  return (
    <button
      title={title}
      type="button"
      onClick={handleOnclick}
      className={classNames(
        S.button,
        { [S.primary]: primary },
        { [S.bordered]: bordered },
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
