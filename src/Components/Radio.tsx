import React from 'react'
import { useField, FieldAttributes } from 'formik'

type RadioProps = { label: string } & FieldAttributes<{}>

export const Radio = ({ label, ...props }: RadioProps) => {
  const [ field ] = useField<{}>(props);
  return (
    <>
      <input {...field} value={label} type="radio" />
      <label>{label}</label>
    </>
  )
}
