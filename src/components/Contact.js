import React from 'react';

import Zoom from 'react-reveal/Zoom';

function Contact() {
    return (
        <div>

            
            <div id="contact">
                <h1 className="sectionTitleSecondary">
                    Contact me
                </h1>
                <Zoom>
                    <form id="contactForm" action="https://formspree.io/f/xqkwvwdg" method="post">
                        <label htmlFor="name">Name *</label>
                        <br />
                        <input className="inputField" id="name" type="text" name="Name" required />
                        <br />
                        <label htmlFor="email">Email *</label>
                        <br />
                        <input className="inputField" id="email" type="email" name="Email" required />
                        <br />
                        <label htmlFor="phone">Phone </label>
                        <br />
                        <input className="inputField" id="phone" type="number" name="Number" required />
                        <br />
                        <label htmlFor="message">Message *</label>
                        <br />
                        <textarea className="inputField" id="message" cols="30" rows="6" name="Message"></textarea>
                        <br />
                        <button className="inputField" id="btnSubmit" type="submit">
                            Submit
                        </button>    
                    </form>
                </Zoom>
            </div>
        
        </div>
    );
}

export default Contact;