import { Box, Button, Container, Grid, TextField } from '@mui/material'
import { Formik } from 'formik';
import React, { useRef } from 'react'
import { api } from '../../services/Api';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../components/formElement/InputField';

const Login = () => {
  const navigate = useNavigate()
  const inputref=useRef(null)
  
  const initialState = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
          .email('Valid email is needed')
          .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
  });

  const handleSubmit = async (values) => {
    const response = await api.post('user/login', values)
     localStorage.setItem("authToken", response.data.accessToken)
    if (response) {
      navigate("/dashboard")
    }
  }

  return (
    <Container>
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Box>
          <Box>
            <h2>Login</h2>
          </Box>
          <Formik 
            initialValues={initialState} 
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >{({ values, errors, touched, handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
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
                {/* <InputField 
                 ref={inputref} 
                 name="email"
                  label="Email"
                  onChange={handleChange}
                  variant="outlined"
                  value={values.email}
                  error={Boolean(errors.email && touched.email)}
                  helperText={Boolean(errors.email && touched.email) && errors.email}
                  sx={{ width: 1 }}
                  margin='normal'/> */}
              </Box>
              <Box>
                <TextField
                  id="password"
                  name="password"
                  label="passowrd"
                  onChange={handleChange}
                  variant="outlined"
                  value={values.password}
                 error ={Boolean(errors.password && touched.password)}
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
              <p>If you are new user? <Link to="/singup">Singup</Link> </p>
            </form>
          )}
          </Formik>
        </Box>
      </Grid>
    </Container>
  )
}

export default Login