import { combineReducers } from "redux";
import { TaskReducer } from "./taskReducer";

export const reducers = combineReducers({
    allTasks : TaskReducer , 
}) 