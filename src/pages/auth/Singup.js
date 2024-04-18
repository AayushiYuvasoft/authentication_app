import { Box, Button, Container, Grid, TextField } from '@mui/material'
import { Formik } from 'formik';
import React from 'react'
import { api } from '../../services/Api';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Singup = () => {
  const navigate = useNavigate()
  const initialState = {
    email: "",
    user_name:"",
    password: "",
  }

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required('Name is required'),
    email: Yup.string().email('Valid email is needed').required('Email is required'),
    password: Yup.string().required('Password is required').min(4 ,"min 4 is required").max(8 ,"max 8 is required")
  });

  const handleSubmit = async (values) => {
    const response = await api.post("/users", values)
    console.log(response)
    if (response.data) {
      navigate("/")
    }
  }

  return (
    <Container>
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Box>
          <Box>
            <h2 >Singup</h2>
          </Box>
          <Formik initialValues={initialState} validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >{({ values, errors, touched, handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
                <Box>
                <TextField
                  id="Name"
                  name="user_name"
                  label="Name"
                  onChange={handleChange}
                  variant="outlined"
                  value={values.user_name}
                  error={Boolean(errors.user_name && touched.user_name)}
                  helperText={Boolean(errors.user_name && touched.user_name) && errors.user_name}
                  sx={{ width: 1 }}
                  margin='normal'
                />
              </Box>
              <Box>
                <TextField
                  id="Email"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  variant="outlined"
                  value={values.email}
                  error={Boolean(errors.email && touched.email)}
                  helperText={Boolean(errors.email && touched.email) && errors.email}
                  sx={{ width: 1 }}
                  margin='normal'
                />
              </Box>
              <Box>
                <TextField
                  id="password"
                  name="password"
                  label="passowrd"
                  onChange={handleChange}
                  variant="outlined"
                  value={values.password}
                  error={Boolean(errors.password && touched.password)}
                  helperText={Boolean(errors.password && touched.password) && errors.password}
                  sx={{ width: 1 }}
                  margin='normal'

                />
              </Box>
              <Button
                variant="contained"
                // className="theme-btn"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </form>
          )}
          </Formik>
        </Box>
      </Grid>
    </Container>
  )
}

export default Singup