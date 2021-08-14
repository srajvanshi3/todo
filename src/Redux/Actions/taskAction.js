 import { ActionTypes } from "../constants/action-type"
 export const setTasks = (tasks)=> {
     console.log("setasks ", tasks )
     return{
         type:ActionTypes.SET_TASKS ,
         payload:tasks
     }
 }
 export const selectedTasks = (task)=> {
    return{
        type:ActionTypes.SELECTED_TASK ,
        payload:task
    }
}
