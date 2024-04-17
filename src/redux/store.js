import { combineReducers, createStore } from "redux";
import { contactsReducers, filtersReducers } from "./reducers";
import { devToolsEnhancer } from "@redux-devtools/extension";

const rootReducer = combineReducers({
    contacts: contactsReducers,
    filters: filtersReducers
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);