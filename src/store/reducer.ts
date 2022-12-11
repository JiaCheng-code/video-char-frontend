import {combineReducers} from "redux";

import dashboardReducer from "./reducers/dashboardReducer";

const mainReducer = combineReducers({
    dashboard: dashboardReducer
})

export default mainReducer