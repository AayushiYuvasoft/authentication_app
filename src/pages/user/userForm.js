import { Box, Button, Container, Grid,  TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const UserForm = () => {
  const initialState = {
    name: "",
    email: "",
    mobileNo: "",
    userType: ""
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Valid email is needed').required('Email is required'),
    mobileNo: Yup.string().required('Mobie No is required'),
    userType: Yup.string().required('user type is required'),

  })

  const handleSubmit = () => {

  }
  return (
    <Container>
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        <Grid item xs={6} textAlign="left">
          <Typography>Add Contact</Typography>
        </Grid>
     
      </Grid>
      <Box>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(values,
            errors,
            handleChange,
            touched
          ) => {
            <form onSubmit={handleSubmit}>
              <Grid item={12} spacing={2}>
                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="name"
                    name="name"
                    required
                    value={values.name}
                    onChange={handleChange}
                    error={touched?.name && Boolean(errors?.name)}
                    helperText={touched?.name && errors?.name}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Email"
                    name="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    error={touched?.email && Boolean(errors?.email)}
                    helperText={touched?.email && errors?.email}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Mobile No"
                    name="mobileNo"
                    required
                    value={values.mobileNo}
                    onChange={handleChange}
                    error={touched?.mobileNo && Boolean(errors?.mobileNo)}
                    helperText={touched?.mobileNo && errors?.mobileNo}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="User Type"
                    name="userType"
                    required
                    value={values.userType}
                    onChange={handleChange}
                    error={touched?.userType && Boolean(errors?.userType)}
                    helperText={touched?.userType && errors?.userType}
                  />
                </Grid>
                {/* <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    type="text"
                    label="Phone"
                    name="phone"
                    required
                    value={values.phone}
                    onChange={handleChange}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid> */}
              </Grid>
            </form>
          }}

        </Formik>

      </Box>
    </Container>

  )
}

export default UserForm