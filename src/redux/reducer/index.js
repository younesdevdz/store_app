import { combineReducers } from "redux";
import { productReducer } from "./producrReducer";

export   const reducers = combineReducers({
    allProducts: productReducer,
})

