import React from "react";
import './Contact.css'

export default function Contact() {
  return (
      <>
      <div className="contact">
    <section className="contact_container">
        <div className="contact_title">
        <h1>Contact </h1>
        </div>
        
    
       <div className="contact_wrapper">
          <form
            action="https://rahultomar092@gmail.com"
            method="POST"
          >
            {/* name */}
            <div>
              <label className="contact_label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Rahul Tomar"
                className="contact_input"
              />
              </div>
           
            {/* name */}
            {/* email */}
            <div>
              <label className="contact_label">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
                className="contact_input"
              />
           </div>
            {/* email */}
            {/* description */}
            <div>
              <label className="contact_labeldesc">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="your description here....."
                className="contact_desc"
              />
           </div>
            {/* email */}
            <div>
            <button
              type="submit"
              className="contact_button"
              style={{fontWeight:'bolder', boxShadow:"5px 5px 5px " , border:"1px red "}}
            >
              submit
            </button>
            </div>
          </form>
     
      </div>
    </section>
    </div>
    </>
  );
}