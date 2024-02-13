import { Link } from "react-router-dom";
import { propsTrain } from "../../types/types";
import './index.css'
import { useAppSelector } from "../../store/hooks";


const ListOfTrains = ({ trains } : propsTrain ) => {
    const  { status, error } = useAppSelector(state => state.setTrainListData);
    return <div className="trains-wrapper">
    <ul className="trains">
        <p>Все поезда</p>
        {trains.map((train, id) => {
            return <li className="trains-link" key={id} >
                <Link  to={`/trainCharacteristic/${id}`}>{train.name} {train.description}</Link>
            </li>
        })}
    </ul>
    <p>{status === 'rejected' && error}</p>
    </div>
    
}
 
export default ListOfTrains;