import {combineReducers} from "redux";
import reducer from "./repositoryReducer";

const reducers= combineReducers({
    repositories: reducer
});

export default reducers;