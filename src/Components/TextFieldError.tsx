import { FieldAttributes, useField } from 'formik'
import React from 'react'
import { TextField } from '.';
import { TextFieldProps } from './TextField';

export const TextFieldError: React.FC<TextFieldProps & FieldAttributes<{}>> = ({
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <>
      <TextField
        {...field}
        placeholder={props.placeholder}
        value={props.value}
      />
      {errorText &&
        <div style={{backgroundColor: 'red', color: 'white'}}>
          {errorText}
        </div>
      }
    </>
  );
};