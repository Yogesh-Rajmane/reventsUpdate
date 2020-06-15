export const createReducer = (initialState, fnMap)=>{
    return(state = initialState, { type , payload} )=>{
        const handler=fnMap[type]
        return handler?(state,payload):state
    }
}