import React from 'react'
import produce from "immer";
import { combineReducer } from 'redux'
import createReducer from './ReducerUntil';

const initialState = {
    users: {
        firstName: 'sara',
        lastName: 'levi',
        age: '12'
    }
}

// export default produce((state, action) => {
//     switch (action.type) {
//         case 'SET_FIRST_NAME':
//             state.users.firstName = action.payload
//             break;
//         case 'SET_LAST_NAME':
//             state.users.lastName = action.payload
//             break;
//         case 'SET_AGE':
//             state.users.age = action.payload
//             break;
//         default:
//             break;
//     }
// }, initialState)

const user = {
    setFirstName(state, action) {
        state.users.firstName = action.payload
    },
    setLastName(state, action) {
        state.users.lastName = action.payload
    },
    setAge(state, action) {
        state.users.age = action.payload
    },

}

export default produce((state, action) => createReducer(state, action, user), initialState)