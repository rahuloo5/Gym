import React from 'react'
import { BiDumbbell,BiCycling,BiRun } from "react-icons/bi";
import {Link} from 'react-router-dom';
import './Plans.css'

function Plans() {
    return (
        <div className="membership">
            <h1>View Our Plans</h1>
            <p className="membership_desc">
                Get Started today and recieve 15% off your first month
                </p>
                <div className="membership_wrapper">
                    <div className="memebership_card">
                        <div className="membership_title">
                    <BiDumbbell className="member_class"/>
                    <h3>Starter</h3>
                    </div>
                    <div className="membership_perks">
                        <p>Get access to entire Gym</p>
                        <p>₹900 per month</p>
                    </div>
                    <Link to ='/' className="membership_button">Sing Up</Link>

                    </div>

                    <div className="memebership_card">
                        <div className="membership_title">
                    <BiCycling className="member_class"/>
                    <h3>Silver</h3>
                    </div>
                    <div className="membership_perks">
                        <p>Get access to entire Gym</p>
                        <p>Cardio Access</p>
                        <p> ₹1200 per month </p>
                    </div>
                    <Link to ='/' className="membership_button">Sing Up</Link>

                    </div>

                    <div className="memebership_card">
                        <div className="membership_title">
                    <BiRun className="member_class"/>
                    <h3>Gold</h3>
                    </div>
                    <div className="membership_perks">
                    <p>Get access to entire Gym</p>
                        <p>Cardio Access</p>
                        <p>Private Personal Training</p>
                        <p>₹1500 per month</p>
                    </div>
                    <Link to ='/' className="membership_button">Sing Up</Link>

                    </div>

                    
                
                
                
                
                
                
                
                
                
                
                </div>
        </div>
    )
}

export default Plans
