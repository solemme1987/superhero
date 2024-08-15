import { combineReducers } from "redux";
import toggleSlice  from "./toogle/toggleSlice";
import teamHeroSlice from "./hero/teamHeroSlice";
import alertSlice from "./alerts/alertSlice";

/* import here all reducers 
  Example: 
  import { counterReducer } from "./counter/counterSlice"; 
*/

const rootReducer = combineReducers({
  /* 
    add here all reducers 
    Example:
    counter: counterReducer,
  */
  toggle: toggleSlice,
  teamHero: teamHeroSlice,
  alert: alertSlice,
});

export default rootReducer;
