import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";

export const rootreducs = combineReducers ({
    counter : counterReducer
})   