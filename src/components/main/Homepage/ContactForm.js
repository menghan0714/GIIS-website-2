import React from "react";

function ContactForm() {
    return (
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-6">
                    <h2 id="contact">Contact Me</h2>
                    <div className="form-group">
                        <form name="contact" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <p hidden>
                                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                            </p>
                            <p>
                                <label htmlFor="name">Name</label> <br />
                                <input type="text" id="name" name="name" required />
                            </p>
                            <p>
                                <label htmlFor="email">Email</label> <br />
                                <input type="email" id="email" name="email" required />
                            </p>
                            <p>
                                <label htmlFor="wechat">WeChat ID</label> <br />
                                <input type="text" id="wechat" name="wechat" required />
                            </p>
                            <p>
                                <label htmlFor="message">Message</label> <br />
                                <textarea id="message" name="message" required></textarea>
                            </p>
                            <p>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
