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
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch