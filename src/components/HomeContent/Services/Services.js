import React from 'react'
import classes from './Services.module.scss'

const Services = () => {
    const services = ['Delivery within 24 hours', 'Quality products', 'Customer Support'];
    return(
        <div className={classes.services}>
            <ul>
            <h3>Services</h3>
            {services.map((service, i)=>(
                <li key={i}>
                    {service}
                </li>

            ))}
            </ul>
        </div>
    )
}

export default Services