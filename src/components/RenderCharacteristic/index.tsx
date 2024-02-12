import { useEffect } from "react";
import {  propsCharacteristic, TrainCharacteristicData } from "../../types/types";
import { isValidData, isValidDataStart, randomId } from "../../helpers/functions";
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setTrainData } from "../../store/features/trainCharacteristicSlice";
import './index.css';

const warningStyle = {
    border: '1px solid red'
}

const RenderCharacteristic = ({chosenTrain, handleChangeCharacteristic}: propsCharacteristic) => {
    const properties: TrainCharacteristicData[] = chosenTrain.map((characteristic, id) => ({
        speed: characteristic.speed,
        force: characteristic.force,
        engineAmperage: characteristic.engineAmperage,
        valid: isValidDataStart(characteristic.speed, characteristic.force, characteristic.engineAmperage),
        id: randomId(id + 1) 
    }));
    const dispatch = useAppDispatch();
    const trainData = useAppSelector(state => state.setTrainData);

    useEffect(() => {
        dispatch(setTrainData(properties));
    },[])

    return <tbody>{trainData.trainData.map((characteristic) => {   
        return <tr key={characteristic.id}>
            <td>
                <input value={characteristic.speed} 
                    style={isValidData(String(characteristic.speed),'speed') ? 
                         {} : warningStyle
                    }
                    onChange={(e) => handleChangeCharacteristic(characteristic.id, e.target.value, 'speed')}
                />
            </td>
            <td>
                <input value={characteristic.force}
                    style={isValidData(String(characteristic.force),'force') ?
                    {} : warningStyle
                    }
                    onChange={(e) => handleChangeCharacteristic(characteristic.id, e.target.value, 'force')}
                />
            </td>
            <td>
                <input 
                    value={characteristic.engineAmperage} 
                    style={isValidData(String(characteristic.engineAmperage),'engineAmperage') ? 
                        {} : warningStyle
                    }
                    onChange={(e) => handleChangeCharacteristic(characteristic.id, e.target.value, 'engineAmperage')}
                />
            </td>
        </tr>
        })}
    </tbody> 
}
 
export default RenderCharacteristic;