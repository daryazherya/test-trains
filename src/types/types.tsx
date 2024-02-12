export interface TrainCharacteristic {
    speed: number;
    force: number;
    engineAmperage: number
}
export interface Train {
    name: string;
    description: string;
    characteristics: TrainCharacteristic[];
}

export interface TrainCharacteristicData {
    speed: number;
    force: number;
    engineAmperage: number;
    id: number,
    valid: boolean
}

export interface TrainDataState {
    trainData: TrainCharacteristicData[];
}
export interface TrainsList {
    trains: Train[]
}

export type propsTrain = {
    trains: Train[]; 
}  

export type propsCharacteristic = {
    chosenTrain: TrainCharacteristic[];
    handleChangeCharacteristic: (id: number, value: string , prop: string) => void;
}
 