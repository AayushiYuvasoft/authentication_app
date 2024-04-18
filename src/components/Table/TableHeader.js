import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const TableHeader = () => {
  return (
    <Grid container spacing={2} sx={{ marginBottom: 3 }}>
      <Grid item xs={6} textAlign="left">
        <Typography variant='h5'>Contact</Typography>
        <Typography variant="body2">Manage your User</Typography>
      </Grid>
      <Grid item xs={6} textAlign="right">
        <Button variant="contained"
          guttrBottom
        // onClick={() => navigate("/contact/form")}
        >
          Add User
        </Button>
      </Grid>
    </Grid>
  )
}

export default TableHeader