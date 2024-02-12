import { useParams } from "react-router-dom";
import ListOfTrains from "../ListOfTrains";
import { propsTrain, Train } from "../../types/types";
import RenderCharacteristic from "../RenderCharacteristic";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateTrainData } from "../../store/features/trainCharacteristicSlice";
import './index.css'

const TrainCharacteristics = (props: propsTrain) => {
    const { id } = useParams();
    const filterTrains = (data: Train[]) => {
        return data.find((train) => train.name.slice(7) === id);
    };
    const chosenTrain = filterTrains(props.trains);
    const trainData = useAppSelector((state) => state.setTrainData);
    const dispatch = useAppDispatch();
   
    function checkValidData() {
       return !trainData.trainData.every(characteristic => characteristic.valid === true)
    }
    function handleChangeCharacteristic(id: number, value: string , prop: string) {
        dispatch(updateTrainData({id, value, prop}))
    }
    function sortSpeed() {
        const res = trainData.trainData
        .map(characteristic => +characteristic.speed)
        .sort((a,b) => a - b)
        console.log(res)
    }
    
    return <main className="main">
        <ListOfTrains trains={props.trains}/>
        <div className="table-wrapper">
        <div className="table-description">Характеристики поезда {id}</div>
            {chosenTrain &&  <table className="table">
                <thead>
                    <tr>
                        <th>
                            Скорость
                        </th>
                        <th>
                            Сила тяги
                        </th>
                        <th>
                            Ток двигателя
                        </th>
                    </tr>
                </thead>
                    <RenderCharacteristic 
                        key={id} 
                        chosenTrain={chosenTrain.characteristics} 
                        handleChangeCharacteristic={handleChangeCharacteristic}
                    />   
            </table>}
            <button className="table-button"
                disabled={checkValidData()}
                onClick={sortSpeed}
            >
                Отправить данные
            </button>
        </div>
    </main>
}
 
export default TrainCharacteristics;