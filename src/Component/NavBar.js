import React,{useState} from 'react'

import { Link, Router, Switch , Route} from 'react-router-dom';
import './Navbar.css'
import {FaAlignRight} from 'react-icons/fa'
import Hero from './Hero'


function NavBar() {

    const [toggle , Settoggle] = useState(false)

    const handler=()=>{

        Settoggle(!toggle)

     
    }
        
    return (
        <>
        <div className="navbar">
        
        
            <Link to ='/'  className="logo">Joggers Park</Link>
           
          
               <FaAlignRight className="button" onClick={handler
               }/>
           
            
            <ul className={toggle?"nav-menu active":"nav-menu"}>
                
               <Link to ='/' className="nav_link">Home</Link>
                <Link to ='/Services' className="nav_link">Services</Link>
              <Link to ='/Plans' className="nav_link">Plans</Link>
                <Link to ='/Contact' className="nav_link">Contact Us</Link>
               
             </ul>            
</div>




        
        
           
               
        </>
    )
}

export default NavBar
