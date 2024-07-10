// redux/features/employee/employeeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../api/axiosInstance'; // Adjust the import path as necessary

export const fetchEmployees = createAsyncThunk(
  'employee/fetchEmployees',
  async ({ page = 1, size = 5 }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/employee?page=${page}&size=${size}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createEmployee = createAsyncThunk(
  'employee/createEmployee',
  async (employee, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/employee', employee);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  'employee/updateEmployee',
  async (employee, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/employee`, employee);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  'employee/deleteEmployee',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/employee/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    paging: {
      page: 1,
      size: 5,
      totalPages: 0,
      totalElements: 0,
    },
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload.data;
        state.paging = action.payload.paging;
        state.status = 'succeeded';
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
        state.status = 'succeeded';
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
        state.status = 'succeeded';
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter((emp) => emp.id !== action.meta.arg);
        state.status = 'succeeded';
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload;
          state.status = 'failed';
        }
      );
  },
});

export default employeeSlice.reducer;
