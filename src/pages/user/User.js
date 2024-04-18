import React, { useEffect, useState } from 'react'
import TableHeader from '../../components/Table/TableHeader'
import Table from '../../components/Table/Table'
import { getUser } from '../../services/userService';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Email', headerName: 'email', width: 130 },
  {
    field: 'Mobile No',
    headerName: 'Mobile No',
    type: 'number',
    width: 90,
  },
  { field: 'userType', headerName: 'User Type', width: 70 },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row?.firstName || ''} ${row?.lastName || ''}`,
  // },
];



const User = () => {
  const navigate=useNavigate()
  const [data, setdata] = useState([])
  const fetchData = async () => {
    try {
      const user = await getUser();
      setdata(user.data)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData()
  },[])
  return (
    <>
      {/* <TableHeader /> */}
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
      <Grid item xs={6} textAlign="left">
        <Typography variant='h5'>Contact</Typography>
        <Typography variant="body2">Manage your User</Typography>
      </Grid>
      <Grid item xs={6} textAlign="right">
        <Button variant="contained"
          guttrBottom
         onClick={() => navigate("/user/form")}
        >
          Add User
        </Button>
      </Grid>
    </Grid>
      <Table row={data} column={columns} />
    </>)
}

export default User