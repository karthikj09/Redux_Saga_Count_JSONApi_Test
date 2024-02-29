import { requestGetUser } from "../requests/user";
import { setUser } from "../../user/action";
import {call,put} from "redux-saga/effects"


export function* handleGetUser(){
    try{
        const response = yield call(requestGetUser);
        const userData = response.data;
        yield put(setUser(userData))
    }catch(error){
        console.log(error);
    }
}