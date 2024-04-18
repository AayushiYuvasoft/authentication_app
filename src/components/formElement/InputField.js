import { TextField } from '@mui/material';
import React, { forwardRef } from 'react'

const InputField = forwardRef((
  props, ref
) => {
  console.log(ref)
  const {label }=props
  return (
    <TextField
      // id={name}
      // name={name}
      label={label}
      ref={ref}
      // onChange={handleChange}
      // variant="outlined"
      // value={values}
      // error={Boolean(errors.email && touched.email)}
      // helperText={Boolean(errors.email && touched.email) && errors.email}
      // sx={{ width: 1 }}
      // margin='normal'
    />);
}
)
export default InputField