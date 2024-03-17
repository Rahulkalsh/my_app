import React, { Component } from 'react';
class Features extends Component {
    state = {}
    render() {
        return (
            <div>
                <section class="">
                    <div class="container">
                        <img src="images/featurehead.PNG" alt="" width="100px" class="img-fluid mb-3" />
                        <h2 class="mt-3 mb-4">Simply English making your <br></br>communication skills your greatest asset</h2>
                        <h5>Your Language Coach: Elevate speaking, writing, and interview skills seamlessly.</h5>
                        <h1 class="abtus mt-5">App Features</h1>
                        <div class="row mt-5 mb-5 d-flex align-items-center">
                            <div id="demo" class="carousel slide w-100" data-ride="carousel">

                                {/* Indicators */}
                                <ul class="carousel-indicators featureindicator">
                                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                                    <li data-target="#demo" data-slide-to="1"></li>
                                    <li data-target="#demo" data-slide-to="2"></li>
                                    <li data-target="#demo" data-slide-to="3"></li>
                                    <li data-target="#demo" data-slide-to="4"></li>
                                </ul>

                                {/* The slideshow */}
                                <div class="carousel-inner bgcircle">
                                    <div class="carousel-item active">
                                        <div class="row d-flex align-items-center">
                                            <div class="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                                                <img src="images/Guideprompts.png" alt="app-img" width="48.2%"
                                                    class="img-fluid rounded h-100" />
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2 ">
                                                <div class="">
                                                    <h2 class="featurehead">Guided Learning Prompts</h2>
                                                    <p>Let our Guided Learning Prompts be your personalized language coach. Tailored
                                                        to your proficiency, these prompts not only refine your English skills but
                                                        also provide structured lessons, making learning on SimplyEnglish a breeze.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row d-flex align-items-center">
                                            <div class="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                                                <img src="images/voice.png" alt="app-img" width="48.2%" class="img-fluid rounded" />
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2 ">
                                                <div class="">
                                                    <h2 class="featurehead">Voice Recognition</h2>
                                                    <p>Speak your questions into our SimplyEnglish app and receive instant answers!
                                                        Our Voice Recognition feature not only
                                                        enhances your spoken English but also allows you to effortlessly inquire
                                                        about anything, eliminating the need for
                                                        typing.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row d-flex align-items-center">
                                            <div class="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                                                <img src="images/voiceenabled.png" width="48%" alt="app-img"
                                                    class="img-fluid rounded" />
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2 ">
                                                <div class="">
                                                    <h2 class="featurehead">Voice-Enabled Learning</h2>
                                                    <p>Immerse yourself in interactive learning with Voice-Enabled Learning on
                                                        SimplyEnglish. Speak, listen, and practice pronunciation effortlessly,
                                                        taking your language skills to new heights with just your voice.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row d-flex align-items-center">
                                            <div class="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                                                <img src="images/chathistory.png" width="48.2%" alt="app-img"
                                                    class="img-fluid rounded" />
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2 ">
                                                <div class="">
                                                    <h2 class="featurehead">Chat History</h2>
                                                    <p>No need to worry about forgetting lessons—SimplyEnglish's Chat History
                                                        feature keeps track of your progress. Revisit and review your personalized
                                                        chat log to stay organized and motivated throughout your English learning
                                                        journey.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row d-flex align-items-center">
                                            <div class="col-lg-6 col-md-6 col-12 mt-2 text-center mt-2 mb-2">
                                                <img src="images/askanything.png" width="48.2%" alt="app-img"
                                                    class="img-fluid rounded" />
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12 mt-2  mt-2 mb-2 ">
                                                <div class="">
                                                    <h2 class="featurehead">Ask Anything</h2>
                                                    <p>With our "Ask Anything" feature, speaking is all you need to do. Simply use
                                                        your voice to inquire about language nuances, exam strategies, or any
                                                        English-related queries, and receive instant and accurate responses on
                                                        SimplyEnglish.</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* Left and right controls */}
                                {/* <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a> */}
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Features;