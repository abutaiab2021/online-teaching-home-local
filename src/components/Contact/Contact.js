import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="container">
           <div className="contact">
           <h2 className="text-center">Contact Us</h2>
            <hr />
            <form >
            <label className="text-center">
                Your First Name:
                <input placeholder="Your First Name" className="text-center" type="text" name="name" />
            </label>
            <br />
            <label className="text-center">
                Your Last Name:
                <input className="text-center" placeholder="Your Last Name" type="text" name="name" />
            </label>
            <br />
            <label className="text-center">
               Email Address:
                <input className=" email text-center" placeholder="Your Email Address" type="text" name="name" />
            </label>
            <br />
            <label className="text-center">
               Your Address:
               <textarea className="text-center" placeholder="Your Email Address"></textarea>
            </label>
            <br />
                <button className="submit btn btn-primary">Submit</button>
            </form>
           </div>
        </div>
    );
};

export default Contact;