import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListOfTrains from '../../ListOfTrains';
import TrainCharacteristics from '../../TrainCharacteristics'
import { useEffect } from 'react';
import { fetchData } from '../../../api/fetch';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setTrainListData } from '../../../store/features/trainListSlice';

const App: React.FC = () => {
    const  trains = useAppSelector(state => state.setTrainListData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function getTrains () {
            const allTrains = await fetchData("https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json");
            dispatch(setTrainListData(allTrains));
        }
        getTrains()
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<ListOfTrains trains={trains.trains}/>}
                ></Route>
                <Route
                    path="/trainCharacteristic/:id"
                    element={<TrainCharacteristics trains={trains.trains}/>}
                ></Route>
            </Routes>
        </BrowserRouter>   
    );
}

export default App;
