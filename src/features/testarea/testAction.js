import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

export const increamentCounter = ()=>{
    return{
            type: INCREMENT_COUNTER
    }
}
export const decreamentCounter = ()=>{
    return{
            type: DECREMENT_COUNTER
    }
}
