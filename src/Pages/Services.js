import React from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'

import Gym from '../images/service.jpg'
import './Service.css'


function Services() {

    
    return (
        <div className="service">
            <div className="service_container">
                <div>
                    <p className="topline">Features</p>
                    <h1 className="service_heading">What We Offer</h1>
                    <div className="services_features">
                        <p className="services_feature">
                            <AiOutlineDoubleRight/>Personal Trainer Sessions
                            </p>
                            <p className="services_feature">
                            <AiOutlineDoubleRight/>Indoor Pool
                            </p>
                            <p className="services_feature">
                            <AiOutlineDoubleRight/>Weight Training
                            </p>
                            <p className="services_feature">
                            <AiOutlineDoubleRight/>Cardio Services
                            </p>
                            <p className="services_feature">
                            <AiOutlineDoubleRight/>Personal Lockers
                            </p>
                            <p className="services_feature">
                            <AiOutlineDoubleRight/>Group Fitness Classes
                            </p>
                            </div>
                           
                            </div>
                            <div>
                            <img src={Gym} alt ="services" className="service_image"/>
                            </div>
    

            </div>
           
            
        </div>
    )
}

export default Services
