// import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

export default store;