import { combineReducers } from "@reduxjs/toolkit";
import authUserReducers from "../slices/authUser";

const reducers = combineReducers({
  authUser: authUserReducers,
});

export default reducers;
