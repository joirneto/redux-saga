import getIP from "./ipSagas";
import {takeLatest} from 'redux-saga/effects'
import getUA from "./uaSagas";

function *index(){
    yield takeLatest('LOAD_DATA_REQUEST', getIP)
    yield takeLatest('LOAD_UA_REQUEST', getUA)
}

export default index