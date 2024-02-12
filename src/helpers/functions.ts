
export function randomId (id: number) {
    return Math.random() * id
}

export function isValidDataStart(speed: number , force: number , engineAmperage: number ) {
    if( speed > 0 && engineAmperage > 0 && /[.,]/g.test(String(force))) {
        return true
    } else {
        return false
    }
}

export function isValidData(value: string, prop: string ) {
    if(prop === 'speed' || prop === 'engineAmperage') {
        return +value > 0 && !/[.,]/g.test(value)
    } else {
        return /^[0-9]+[.,][0-9]+$/g.test(value)
    }
}