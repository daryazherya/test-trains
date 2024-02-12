import { Link } from "react-router-dom";
import { propsTrain } from "../../types/types";
import './index.css'

const ListOfTrains = (props: propsTrain ) => {

    return <ul className="trains">
        {props.trains.map((train, id) => {
            return <li className="trains-link" key={id} >
                <Link  to={`/trainCharacteristic/${id}`}>{train.name} {train.description}</Link>
            </li>
        })}
    </ul>
}
 
export default ListOfTrains;