import React from 'react'
import './Button.css'

interface Props {
  title: string
  clickHandler?: () => void
}

export const Button: React.FC<Props> = ({ title, clickHandler }) => {
  return (
    <button className="gen-button" onClick={clickHandler}>
      {title}
    </button>
  )
}

export default Button
