import React from 'react'
import Gym1 from '../images/gym1.jpg'
import Gym2 from '../images/gym2.jpg'
import Gym3 from '../images/gym3.jpg'
import Gym4 from '../images/gym4.jpg'
import {Link} from 'react-router-dom'
import './Hero.css'

function Hero() {
    return (
        <div className="hero" >
           
            <div className="hero_content">
                <h1>Joggers Park</h1>
                <p>Join Now For ₹800</p>
               <Link to ='/' className="butt">Get Started</Link>
               
                
               </div>
              
            
            
        </div>
    )
}

export default Hero
