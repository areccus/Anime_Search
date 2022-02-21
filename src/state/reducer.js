import { ERROR, LOADING, SUCCESS } from "./actions"

const initialState = {
    // This sets the inital states of each object below.
    data: {},
    loading: false,
    error: ''
}
// The reducer takes in an state and an action. The state is set to initialState initially, but changes depending on the action which receives date.
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
        return {
            //returns a copy of
            ...state,
            loading: true
        }
        case SUCCESS:
            return {
                ...state,
                //Stops the loading if the api is called successfully.
                loading: false,
                //Sets the payload data inside of the data object. The one in our initial state.
                data: action.payload
            }
        case ERROR: 
        return {
            ...state,
            loading: false,
            error: action.payload
        }
        // The default case returns the initialState if none of the other cases match.
        default:
            return state
    }
}