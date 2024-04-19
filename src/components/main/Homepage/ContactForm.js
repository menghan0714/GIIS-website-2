import React from "react";

function ContactForm() {
    return (
        <div className="row">
            <h2 id="contact">Contact Me</h2>
            <div className="col-12 form-group">
                <form name="contact" netlify="true" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" id="name" name="name" required />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label> <br />
                        <input type="email" id="email" name="email" required />
                    </p>
                    <p>
                        <label htmlFor="message">Message</label> <br />
                        <textarea id="message" name="message" required></textarea>
                    </p>
                    <p>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
