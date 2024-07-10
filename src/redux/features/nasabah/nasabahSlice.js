// src/features/nasabah/nasabahSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../api/axiosInstance';


export const fetchNasabahs = createAsyncThunk('nasabah/fetchNasabahs', async () => {
  const response = await axiosInstance.get('/nasabah');
  return response.data.data;
});

export const createNasabah = createAsyncThunk('nasabah/createNasabah', async (nasabahData) => {
  const response = await axiosInstance.post('/auth/register-nasabah', nasabahData);
  return response.data.data;
});

export const updateNasabah = createAsyncThunk('nasabah/updateNasabah', async (nasabah) => {
  const response = await axiosInstance.get(`/nasabah/${nasabah.id}`, nasabah);
  return response.data.data;
});

export const deleteNasabah = createAsyncThunk('nasabah/deleteNasabah', async (id) => {
  await axiosInstance.delete(`/nasabah/${id}`);
  return id;
});

// export const getNasabahById = createAsyncThunk("nasabah/getNasabah"), async (id) => {
//     const response = await.axiosInstance.get(`/nasabah/${id}`)
//     return response
// }

const nasabahSlice = createSlice({
  name: 'nasabah',
  initialState: {
    nasabahList: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNasabahs.fulfilled, (state, action) => {
        state.nasabahList = action.payload;
      })
      .addCase(createNasabah.fulfilled, (state, action) => {
        state.nasabahList.push(action.payload);
      })
      .addCase(updateNasabah.fulfilled, (state, action) => {
        const index = state.nasabahList.findIndex(nasabah => nasabah.id === action.payload.id);
        if (index !== -1) {
          state.nasabahList[index] = action.payload;
        }
      })
      .addCase(deleteNasabah.fulfilled, (state, action) => {
        state.nasabahList = state.nasabahList.filter(nasabah => nasabah.id !== action.payload);
      });
      builder
//     .addCase(deleteNasabah.rejected, (state, action) => {
//         // Handle the rejected state and maybe store the error in state
//         console.error('Failed to delete nasabah:', action.error);
//         state.error = action.error.message;
//   });

  }
});

export default nasabahSlice.reducer;
