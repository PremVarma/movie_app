import classes from './Input.module.css'
import React from 'react'

interface Props {
  description?: string
  type: string
  placeholder: string
  name: string
  value: string
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<Props> = ({
  description,
  type,
  placeholder = '',
  inputHandler,
  name,
  value,
}) => {
  return (
    <>
      <label>{description}</label>
      <input
        className={classes.input}
        onChange={(event) => inputHandler(event)}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </>
  )
}
