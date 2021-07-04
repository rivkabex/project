import produce from "immer";
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setFirstName, setLastName, setAge } from './Redux/Store/Action'

function mapStateToProps(state) {
    return {
        firstName: state.UserReducer.users.firstName,
        lastName: state.UserReducer.users.lastName,
        age: state.UserReducer.users.age
    }
}

export default connect(mapStateToProps)(function Welcome(props) {
    const { firstName, lastName, age } = props
    return (
        <>
            <div>
                <h2>Welcome {firstName + " " + lastName} age: {age}</h2>
            </div>
        </>
    )

})