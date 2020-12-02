import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <div className="footer_desc">
                    <h1>Jogger`s Park</h1>
                    <p>R. J. Puram, Gwalior, Madhya Pradesh 474004</p>
                    <p id="phone">079871 16994</p>
                </div>
                <div className="footer_links">
                    <h2 className="footer_title">Contact Us</h2>
                    <Link to ="./services" className="footer_link">Contact</Link>
                <Link to ="./services" className="footer_link">Support</Link>
                </div>
                </div>

            <div className="footer_wrapper">
            <div className="footer_links">
                 <h2 className="footer_title">Memberships</h2>
                    <Link to ="./services" className="footer_link">Pricing</Link>
                <Link to ="./plans" className="footer_link">Plans</Link>
            </div>

            <div className="footer_links">
                    <h2 className="footer_title">Soial Media</h2>
                    <a href ="https://www.instagram.com/___rahul5____/" className="footer_link">Instagram</a>
                <a href ="https://www.youtube.com/watch?v=FeXcA5qELvg" className="footer_link">Youtube</a>
                <a href ="https://www.facebook.com/cjpgym/" className="footer_link">Facebook</a>
                </div>
                </div>
<div style={{display:"flex", alignContent:"center" ,marginLeft:"50px" , padding:"10px", justifyContent:"space-between", flexDirection:"column"}}>
                <h2>
                        All Rights Reserved &copy; {new Date().getFullYear()}
                    </h2>
                    <h3>
                        created By :- Rahul Singh Tomar
                    </h3>
                    </div>
            </div>


            

           
      
    )
}

export default Footer
