import { type TabButtonI } from '@/definitions/interfaces/_styled/Buttons'
import cx from 'classnames'

export const TabButton: React.FC<TabButtonI> = ({
  label,
  active,
  tabIndex,
  changeHandler
}) => {
  return (
    <button
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