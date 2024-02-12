import { useEffect } from "react";
import {  propsCharacteristic, TrainCharacteristicData } from "../../types/types";
import { isValidDataStart, randomId } from "../../helpers/functions";
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setTrainData } from "../../store/features/trainCharacteristicSlice";
import './index.css';

const warningStyle = {
    border: '1px solid red'
}

const RenderCharacteristic = (props: propsCharacteristic) => {
    const properties: TrainCharacteristicData[] = props.chosenTrain.map((characteristic, id) => ({
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
                    style={characteristic.speed > 0 && !/[.,]/g.test(String(characteristic.speed)) ? {} : warningStyle}
                    onChange={(e) => props.handleChangeCharacteristic(characteristic.id, e.target.value, 'speed')}
                />
            </td>
            <td>
                <input value={characteristic.force}
                    style={/^[0-9]+[.,][0-9]+$/g.test(String(characteristic.force)) ? {} : warningStyle}
                    onChange={(e) => props.handleChangeCharacteristic(characteristic.id, e.target.value, 'force')}
                />
            </td>
            <td>
                <input 
                    value={characteristic.engineAmperage} 
                    style={characteristic.engineAmperage > 0 && !/[.,]/g.test(String(characteristic.engineAmperage)) ? {} : warningStyle}
                    onChange={(e) => props.handleChangeCharacteristic(characteristic.id, e.target.value, 'engineAmperage')}
                />
            </td>
        </tr>
        })}
    </tbody> 
}
 
export default RenderCharacteristic;