import {  createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import {  Train, TrainsList } from '../../types/types';

const initialState: TrainsList = {
    trains: [],
    status: null,
    error: null
};

export const fetchTrains = createAsyncThunk('trains/fetchTrains', async () => {
    const response = await fetch("https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json")
    const data = response.json();
    return data
  })
  
export const trainListSlice = createSlice({
    name: 'trains',
    initialState,
    reducers: {
        setTrainListData: (state, action: PayloadAction<Train[]>) => {
            state.trains = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTrains.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchTrains.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.trains = action.payload
        })
        .addCase(fetchTrains.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message
        })
        
    }
})

export const {  setTrainListData  } = trainListSlice.actions
export const select = (state: RootState) => state;

export default trainListSlice.reducer