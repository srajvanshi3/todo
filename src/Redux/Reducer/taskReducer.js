import { ActionTypes } from "../constants/action-type";

const initialState = {
  tasks: [
    "Go To Library" , "Have Lunch" , "Meet Friends"
  ],
};
export const TaskReducer = ( state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TASKS:
      return {...state , tasks : payload};
    default:
      return state
  }
};
