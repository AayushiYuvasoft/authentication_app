import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dashboardData: [],
  dashboardError: false,
};

const getTableList = createAsyncThunk('/dashboard/getTableList') => {

}

const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {

  },
});

export const { } = DashboardSlice.actions;

export default DashboardSlice.reducer;
