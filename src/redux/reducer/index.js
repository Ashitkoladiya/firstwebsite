import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { reducer_medicines } from "./medicines.reducer";

export const rootreducs = combineReducers ({
    counter : counterReducer,
    medicine : reducer_medicines
})   