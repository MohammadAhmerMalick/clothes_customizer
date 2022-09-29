import { FC, useState } from 'react'
import classNames from 'classnames'

import S from './Select.module.scss'
import Button from '../../buttons/Button'
import { uuid } from '../../../../utils/utilsFunctions'
import {
  SelectInterface,
  SelectOptionInterface,
} from '../../../../ts/interface'

const Select: FC<SelectInterface> = ({
  label,
  externalLabel,
  options,
  onChange,
  dropUp,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [internalOptions, setInternalOptions] =
    useState<SelectOptionInterface[]>(options)

  const handleButtonClick = () => {
    setIsOpened((state) => !state)
  }

  const handleSelect = (option: SelectOptionInterface) => {
    setInternalOptions((state) =>
      state.map((item) => ({
        ...item,
        isSelected: item.value === option.value,
      }))
    )

    setIsOpened(false)
    onChange(options.filter((item) => item.value === option.value))
  }

  return (
    <div className={S.select}>
      {label ? (
        <Button onClick={handleButtonClick} bordered>
          {label}
        </Button>
      ) : externalLabel ? (
        <div>
          <Button onClick={handleButtonClick}>Select an option</Button>
        </div>
      ) : (
        <Button onClick={handleButtonClick}>
          {internalOptions.filter((option) => option.isSelected).length < 1
            ? 'Select an option'
            : internalOptions
                .filter((option) => option.isSelected)
                .map((option) => <span key={uuid()}>{option.label}</span>)}
        </Button>
      )}
      <div
        className={classNames(
          S.options,
          { [S.dropUp]: dropUp },
          { [S.active]: isOpened }
        )}
      >
        {internalOptions.map((option: SelectOptionInterface) => (
          <div
            key={uuid()}
            onClick={() => handleSelect(option)}
            className={classNames(S.option, {
              [S.selected]: externalLabel
                ? label === option.label
                : option.isSelected,
            })}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Select
