import React, { Component } from 'react'
class Works extends Component {
    state = {}
    render() {
        return (
            <div>
                <section class="simplyenglish">
                    <div class="container">
                        <h1 class="abtus">How it Works</h1>
                        <div class="row mt-5 d-flex align-items-center">
                            <div class="col-lg-6 col-md-6 col-12 mt-2">
                                <ul>
                                    <li><img src="images/signup1.PNG" alt="" class="img-fluid mr-3" width="69px" /> Sign Up </li>
                                    <li><img src="images/learn1.PNG" alt="" class="img-fluid mr-3" width="69px" />Choose what you
                                        would like to learn</li>
                                    <li><img src="images/prompt1.PNG" alt="" class="img-fluid mr-3" width="69px" />Leverage the
                                        guided prompts</li>
                                    <li><img src="images/ask1.PNG" alt="" class="img-fluid mr-3" width="69px" />Type your own
                                        prompts
                                        to ask anything</li>
                                    <li><img src="images/review1.PNG" alt="" class="img-fluid mr-3" width="69px" />Review chat
                                        history</li>
                                </ul>
                                <div class="text-center mt-4">
                                    <img src="images/watchvideo.png" alt="" class="img-fluid" width="50%" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12 mt-2 text-center">
                                <img src="images/howitsworks.png" alt="feature-img" width="85%" class="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Works;