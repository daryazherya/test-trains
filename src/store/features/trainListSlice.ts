import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import {  Train, TrainsList } from '../../types/types';

const initialState: TrainsList = {
    trains: []
};
  
export const trainListSlice = createSlice({
    name: 'trainCharacteristic',
    initialState,
    reducers: {
        setTrainListData: (state, action: PayloadAction<Train[]>) => {
            state.trains = action.payload
        },
       
    }
})

export const {  setTrainListData  } = trainListSlice.actions
export const select = (state: RootState) => state;

export default trainListSlice.reducer