import React, { useState } from 'react'

export interface TextFieldProps {
  value: string
  name: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const TextField = ({ name, value, onChange, onBlur, placeholder = "" }: TextFieldProps) => {
  const [ currentValue, setCurrentValue ] = useState(value);
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={currentValue}
      onChange={(e) => {
        if(onChange) onChange(e);
        setCurrentValue(e.currentTarget.value)
      }}
      onBlur={onBlur}
    />
  )
}
