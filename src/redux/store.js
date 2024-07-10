import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./features/counterSlice"
import authReducer from "./features/authSlice"
import nasabahReducer from "./features/nasabah/nasabahSlice"
import employeeReducer from "./features/employee/employeeSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    nasabah: nasabahReducer,
    employee: employeeReducer
  },
});