import React, { Suspense, useEffect, useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import classes from './Layout.module.scss'

const Layout = props => {
    return(
        <Suspense fallback={<div>Loading</div>}>
            <Header/>
            <Footer/>
        </Suspense>
    )
}

export default Layout