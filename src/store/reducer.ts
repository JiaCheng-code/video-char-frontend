import {combineReducers} from "redux";

import dashboardReducer from "./reducers/dashboardReducer";
import callReducer from './reducers/callReducer'

const mainReducer = combineReducers({
    dashboard: dashboardReducer,
    call: callReducer
})

export default mainReducer