import { createStore } from "redux";
import {bikeReducer} from "./reducer"


export const store = createStore(bikeReducer)