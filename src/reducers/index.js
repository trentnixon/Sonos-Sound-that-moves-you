import { combineReducers } from "redux";

import UI_DATA from "./UI";
import APP from "../js/Application/ChapterLongForm/reducers/Application";

const reducers = combineReducers({
		UI:UI_DATA,
		APP:APP
	})

export default reducers;