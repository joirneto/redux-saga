import axios from "axios";
import { loadDataSuccess } from "../actions";
import {put} from 'redux-saga/effects'


function *getIP(){
    const data = yield axios.get('http://httpbin.org/ip')
    yield put(loadDataSuccess(data.data.origin))
}

export default getIP