import {Action, legacy_createStore as createStore, Store} from "redux";

import mainReducer from './reducer'
import {composeWithDevTools} from "redux-devtools-extension";


const store: Store<unknown, Action> = createStore(mainReducer, composeWithDevTools());

export default store