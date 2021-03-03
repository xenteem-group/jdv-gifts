import React from 'react'
import SigninComp from '../../components/Signin/Signin'
import classes from './Signin.module.scss'

export const Signup = () => {
    return (
        <div className={classes.wrap}>
            <SigninComp/>
        </div>
    )
}

export default Signup
