import React from 'react';

import Zoom from 'react-reveal/Zoom';

function Contact() {
    return (
        <div className="container">            
            <div id="contact">
                <h1 className="sectionTitlePrimary">
                    Contact me
                </h1>
                <h2>
                    I would love to hear from you, whether its about a 
                    project idea, opportunity or just have a chat :)
                </h2>
                <Zoom>
                    <form id="contactForm" action="https://formspree.io/f/xqkwvwdg" method="post">
                    
                        <div id="inputFields">
                            <div>
                                <div className="inputSection">                                                    
                                    <label htmlFor="name">Name *</label>
                                    <input id="name" type="text" name="Name" required />                            
                                </div>
                            
                                <div className="inputSection">                                                    
                                    <label htmlFor="email">Email *</label>
                                    <input id="email" type="email" name="Email" required />                            
                                </div>
                                
                                <div className="inputSection">                                                    
                                    <label htmlFor="phone">Phone </label>                            
                                    <input id="phone" type="number" name="Number" required />                            
                                </div>
                            </div>
                            
                            <div>
                                <div className="inputSection">                                            
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" cols="30" rows="9" name="Message"></textarea>                            
                                </div>
                            </div>
                        </div>

                        <button id="btnSubmit" type="submit">
                        Submit
                    </button>                                   
                    </form>

                </Zoom>
            </div>
        
        </div>
    );
}

export default Contact;