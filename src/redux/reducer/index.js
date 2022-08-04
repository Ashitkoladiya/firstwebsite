import { combineReducers } from "redux";
import { alertReducer } from "./Alert.reducer";
import { authReducer } from "./auth.reducer";
import { counterReducer } from "./counter.reducer";
import { reducer_medicines } from "./medicines.reducer";

export const rootreducs = combineReducers ({
    counter : counterReducer,
    medicine : reducer_medicines,
    auth:authReducer,
    alert:alertReducer
})   