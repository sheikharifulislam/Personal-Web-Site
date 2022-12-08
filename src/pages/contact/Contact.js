import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const handleContactForm = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_s19q3q3", "template_8fvu88d", form.current, "user_l1P4sZbLgP2EXyIi68bTB")
            .then((result) => {
                if (result.status === 200) {
                    alert("Email Send Successfull");
                    e.target.reset();
                }
            })
            .catch((err) => {
                console.log(err.text);
            });
    };

    return (
        <div id="contact-section">
            <div className="contact-section-heading">
                <h2>Contact Us</h2>
            </div>
            <div className="contact-form">
                <form ref={form} onSubmit={handleContactForm}>
                    <div className="form-desing">
                        <label htmlFor="userName">Enter Your Name</label>
                        <input type="text" placeholder="Enter Your Name" name="userName" id="userName" />
                    </div>
                    <div className="form-desing">
                        <label htmlFor="userEmail">Enter Your Email Address</label>
                        <input type="email" placeholder="Enter Your Email Address" name="userEmail" id="userEmail" />
                    </div>
                    <div className="form-desing">
                        <label htmlFor="userMessage">Enter Your Message</label>
                        <textarea
                            name="userMessage"
                            id="userMessage"
                            rows="8"
                            placeholder="Enter Your Message"
                        ></textarea>
                    </div>
                    <button type="submit" id="contact-submit-btn">
                        Send <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
