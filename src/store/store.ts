import { configureStore } from '@reduxjs/toolkit'
import setTrainData  from './features/trainCharacteristicSlice'
import updateTrainData  from './features/trainCharacteristicSlice'
import setTrainListData from './features/trainListSlice'

const store = configureStore({
    reducer: {
        setTrainData,
        updateTrainData,
        setTrainListData
    }
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch