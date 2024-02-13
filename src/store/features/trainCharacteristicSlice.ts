import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import { TrainCharacteristicData, TrainDataState } from '../../types/types';
import { isValidData } from '../../helpers/functions';

const initialState: TrainDataState = {
    trainData: [],

};

export const trainCharacteristicSlice = createSlice({
    name: 'trainCharacteristic',
    initialState,
    reducers: {
        setTrainData: (state, action: PayloadAction<TrainCharacteristicData[]>) => {
            state.trainData = action.payload
        },
        updateTrainData: (state, action: PayloadAction<{ id: number, value: string, prop: string }>) => {
            const { id, value, prop } = action.payload;    
            state.trainData = state.trainData.map(characteristic => {
               if(characteristic.id === id) {
                    return  {...characteristic, [prop]: value, 
                        valid: isValidData(value, prop)
                    } 
               } else {
                    return characteristic
               }
            });  
            // console.log(state.trainData,'udpate')       
        }
    },
})

export const {  setTrainData, updateTrainData } = trainCharacteristicSlice.actions
export const select = (state: RootState) => state;

export default trainCharacteristicSlice.reducer