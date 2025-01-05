import {
  type TabButtonI,
  type SubmitButtonI
} from '@/definitions/interfaces/_styled/Buttons'
import cx from 'classnames'
import {
  COLORS,
  ROUNDED
} from '@/definitions/enums'

export const TabButton: React.FC<TabButtonI> = ({
  label,
  active,
  tabIndex,
  changeHandler
}) => {
  return (
    <button
      role='tab'
      tabIndex={tabIndex}
      onClick={() => changeHandler(tabIndex)}
      className={cx('font-bold text-xl py-2 px-4 font-sans rounded-lg', {
        ['bg-black text-white']: active,
        ['bg-white text-black border-2 border-black']: !active
      })}
    >
      {label}
    </button>
  )
}

export const SubmitButton:React.FC<SubmitButtonI> = ({
  text,
  bgColor,
  textColor,
  rounded,
  clickHandler
}) => {
  return (
    <button
      onClick={clickHandler}
      className={cx('font-bold font-sans text-lg max-w-fit py-1 px-2', {
        ['bg-white border-black border-2']: bgColor === COLORS.WHITE,
        ['bg-black']: bgColor === COLORS.BLACK,
        ['bg-navy']: bgColor === COLORS.NAVY,
        ['bg-gold']: bgColor === COLORS.GOLD,
        ['bg-violet']: bgColor === COLORS.VIOLET,
        ['bg-red']: bgColor === COLORS.RED,
        ['bg-pink']: bgColor === COLORS.PINK,
        ['rounded-none']: rounded === ROUNDED.NONE,
        ['rounded-sm']: rounded === ROUNDED.SM,
        ['rounded-md']: rounded === ROUNDED.MD,
        ['rounded-lg']: rounded === ROUNDED.LG,
        ['rounded-xl']: rounded === ROUNDED.XL,
        ['rounded-2xl']: rounded === ROUNDED.XXL,
        ['text-white']: textColor === COLORS.WHITE,
        ['text-black']: textColor === COLORS.BLACK,
        ['text-gold']: textColor === COLORS.GOLD,
      })}
    >
      {text}
    </button>
  )
}