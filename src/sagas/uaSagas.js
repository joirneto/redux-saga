import axios from "axios";
import { loadUASuccess } from "../actions";
import {put} from 'redux-saga/effects'


function *getUA(){
    const data = yield axios.get('http://httpbin.org/user-agent')
    yield put(loadUASuccess(data.data['user-agent']))
}

export default getUA