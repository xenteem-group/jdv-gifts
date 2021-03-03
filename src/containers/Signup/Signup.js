import React from 'react'
import SignupComp from '../../components/Signup/Signup'
import classes from './Signup.module.scss'

export const Signup = () => {
    return (
        <div className={classes.wrap}>
            <SignupComp/>
        </div>
    )
}

export default Signup
