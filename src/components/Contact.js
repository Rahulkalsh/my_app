import React, { Component } from 'react';
class Contact extends Component {
    state = {}
    render() {
        return (
            <div>
                <section class="contact">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12 mt-2 mb-2">
                                <img src="images/contactus.jpeg" alt="" class="img-fluid" />
                            </div>
                            <div class="col-lg-6 col-md-6 col-12  mt-2 mb-2">
                                <h3 class="abtus">Keep In Touch</h3>
                                <p class="mt-5">
                                    <b>Email Address</b> <br></br> <span><a href="info@simplyenglish.ai">info@simplyenglish.ai</a></span>
                                </p>
                                <p class="mt-2">
                                    <b>Phone Number</b> <br /> India : 9599060043
                                </p>
                                <div>
                                    <a href="#"><img src="images/gogleplay.png" alt="qr-img" width=""
                                        class="img-fluid rounded-lg" /></a>
                                    <img src="images/qr.png" alt="qr-img" width="100px" class="img-fluid ml-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;