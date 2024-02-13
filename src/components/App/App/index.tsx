import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListOfTrains from '../../ListOfTrains';
import TrainCharacteristics from '../../TrainCharacteristics'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchTrains } from '../../../store/features/trainListSlice';

const App: React.FC = () => {
    const  { trains } = useAppSelector(state => state.setTrainListData);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
            dispatch(fetchTrains());
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<ListOfTrains trains={trains}/>}
                ></Route>
                <Route
                    path="/trainCharacteristic/:id"
                    element={<TrainCharacteristics trains={trains}/>}
                ></Route>
            </Routes>
        </BrowserRouter>   
    );
}

export default App;
