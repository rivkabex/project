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

const mapDispatchToProps = (dispatch) => ({
    setFirstName: (first_name) => dispatch(actions.setFirstName(first_name)),
    setLastName: (last_name) => dispatch(actions.setLastName(last_name)),
    setAge: (age) => dispatch(actions.setAge(age)),

})

export default connect(mapStateToProps, mapDispatchToProps)(function User(props) {
    const { firstName, lastName, age, setFirstName, setLastName, setAge } = props
    return (
        <>
            <div>
                firstName:
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
            </div>
            <div>
                lastName:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
            </div>
            <div>
                age:
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)}></input>
            </div>
        </>
    )

})