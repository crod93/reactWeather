import {FETCH_WEATHER} from '../actions/index.js';
export default function (state = [] , action){
  switch (action.type) {
    case FETCH_WEATHER:
    return [action.payload.data, ...state];
    //same as state.concat([action.payload.data])
  }
  return state;
}
