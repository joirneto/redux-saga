export const loadDataRequest = () =>{
    return{
        type: 'LOAD_DATA_REQUEST'
    }
}

export const loadDataSuccess = (data) =>{
    return{
        type: 'LOAD_DATA_SUCCESS',
        data
    }
}

export const loadUARequest = () =>{
    return{
        type: 'LOAD_UA_REQUEST'
    }
}

export const loadUASuccess = (data) =>{
    return{
        type: 'LOAD_UA_SUCCESS',
        data
    }
}


