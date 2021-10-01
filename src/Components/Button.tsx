import React from 'react'

interface ButtonProps {
  type: "submit" | "button" | "reset" | undefined
  children: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Button = ({ type, children, disabled, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
