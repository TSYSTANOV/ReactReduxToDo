import * as actionTypes from './actionTypes'
const initialState = []
function tasksReducer(state = initialState, action){
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return [...state, action.payload]
        default: return state;
    }
}
export {tasksReducer}