import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import peopleReducer from "./peopleReducer";
import contributionReducer from "./contributionReducer";
import boardReducer from "./boardReducer";
import repairReducer from "./repairReducer";

export default combineReducers({
    course: courseReducer,
    people: peopleReducer,
    con: contributionReducer,
    board: boardReducer,
    repair: repairReducer,
});
