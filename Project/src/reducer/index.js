import { bikesFiltered, dataFetched, fetchingData, fetchingError } from "../actions";

const initialState = {
    bikes: [],
    is_fetching: false,
    fetching_error: false,
    results: 0,
    filtered_bikes: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case dataFetched: 
            return Object.assign({}, state, {
                bikes: action.payload.bikes,
                filtered_bikes: action.payload.bikes,
                is_fetching: false,
                fetching_error: false,
                results: action.payload.bikes_counter
            })
        case fetchingData:
            return Object.assign({}, state, {
                is_fetching: true
            })    
        case fetchingError:
            return Object.assign({}, state, {
                is_fetching: false,
                fetching_error: true
            })    
        case bikesFiltered:
            return Object.assign({}, state, {
                filtered_bikes: action.payload
            })    
        default:
            return state;
    }
}

export default rootReducer;