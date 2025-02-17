import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import('../../../assets/customers/css/style.css');


function Home() {
    const navigate = useNavigate();
    return (
        <div>
            {/*slide*/}
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-xl-7">
                            <div className="block" style={{textAlign: "left"}}>
                                <div className="divider mb-3"></div>
                                <span
                                    className="text-uppercase text-sm letter-spacing ">Total Health care solution</span>
                                <h1 class="mb-3 mt-3">Your most trusted health partner</h1>

                                <p className="mb-4 pr-5">A repudiandae ipsam labore ipsa voluptatum quidem quae
                                    laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                                <div className="btn-container ">
                                    <NavLink to='/service' 
                                       className="btn btn-main-2 btn-icon btn-round-full">Make appoinment <i
                                        className="icofont-simple-right ml-2  "></i></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-block d-lg-flex">
                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-surgeon-alt"></i>
                                    </div>
                                    <span>24 Hours Service</span>
                                    <h4 className="mb-3">Online Appoinment</h4>
                                    <p className="mb-4">Get All time support for emergency.We have introduced the
                                        principle of family medicine.</p>
                                    <Link to='/service'  className="btn btn-main btn-round-full">Make a
                                        appoinment</Link>
                                </div>

                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-ui-clock"></i>
                                    </div>
                                    <span>Timing schedule</span>
                                    <h4 className="mb-3">Working Hours</h4>
                                    <ul class="w-hours list-unstyled">
                                        <li class="d-flex justify-content-between">Sun - Wed : <span>7:00 - 17:00</span>
                                        </li>
                                        <li class="d-flex justify-content-between">Thu - Fri : <span>8:00 - 17:00</span>
                                        </li>
                                        <li class="d-flex justify-content-between">Sat - sun
                                            : <span>9:00 - 17:00</span></li>
                                    </ul>
                                </div>

                                <div className="feature-item mb-5 mb-lg-0">
                                    <div className="feature-icon mb-4">
                                        <i className="icofont-support"></i>
                                    </div>
                                    <span>Emegency Cases</span>
                                    <h4 className="mb-3">1-800-700-6200</h4>
                                    <p>Get All time support for emergency.We have introduced the principle of family
                                        medicine.Get Conneted with us for any urgency .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img">
                                <img src="customer/images/about/img-1.jpg" alt="" className="img-fluid"/>
                                <img src="customer/images/about/img-2.jpg" alt="" className="img-fluid mt-4"/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img mt-4 mt-lg-0">
                                <img src="customer/images/about/img-3.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-content pl-4 mt-4 mt-lg-0">
                                <h2 className="title-color">Personal care <br/>& healthy living</h2>
                                <p className="mt-4 mb-5">We provide best leading medicle service Nulla perferendis
                                    veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>

                                <a href='#' onClick={()=>navigate('/service')}className="btn btn-main-2 btn-round-full btn-icon">Services<i
                                    className="icofont-simple-right ml-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-section ">
                <div className="container">
                    <div className="cta position-relative">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-doctor"></i>
                                    <span className="h3">58</span>k
                                    <p>Happy People</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-flag"></i>
                                    <span className="h3">700</span>+
                                    <p>Surgery Comepleted</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-badge"></i>
                                    <span className="h3">40</span>+
                                    <p>Expert Doctors</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="counter-stat">
                                    <i className="icofont-globe"></i>
                                    <span className="h3">20</span>
                                    <p>Worldwide Branch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section service gray-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <h2>Award winning patient care</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates
                                    incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-laboratory text-lg"></i>
                                    <h4 className="mt-3 mb-3">Laboratory services</h4>
                                </div>

                                <div className="content">
                                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a
                                        doloremque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-heart-beat-alt text-lg"></i>
                                    <h4 className="mt-3 mb-3">Heart Disease</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a
                                        doloremque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-tooth text-lg"></i>
                                    <h4 className="mt-3 mb-3">Dental Care</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a
                                        doloremque.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-crutch text-lg"></i>
                                    <h4 className="mt-3 mb-3">Body Surgery</h4>
                                </div>

                                <div className="content">
                                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a
                                        doloremque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-brain-alt text-lg"></i>
                                    <h4 className="mt-3 mb-3">Neurology Sargery</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a
                                        doloremque.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-item mb-4">
                                <div className="icon d-flex align-items-center">
                                    <i className="icofont-dna-alt-1 text-lg"></i>
                                    <h4 className="mt-3 mb-3">Gynecology</h4>
                                </div>
                                <div className="content">
                                    <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a
                                        doloremque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            




            
            
            <section className="section clients">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title text-center">
                                <h2>Partners who support us</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates
                                    incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="container">*/}
                    <div className="row clients-logo">
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src="customer/images/about/1.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src="customer/images/about/2.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src="customer/images/about/3.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src="customer/images/about/4.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src="customer/images/about/5.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="client-thumb">
                                <img src="customer/images/about/6.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        {/*<div className="col-lg-2">*/}
                        {/*    <div className="client-thumb">*/}
                        {/*        <img src="customer/images/about/3.png" alt="" className="img-fluid"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2">*/}
                        {/*    <div className="client-thumb">*/}
                        {/*        <img src="customer/images/about/4.png" alt="" className="img-fluid"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2">*/}
                        {/*    <div className="client-thumb">*/}
                        {/*        <img src="customer/images/about/5.png" alt="" className="img-fluid"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2">*/}
                        {/*    <div className="client-thumb">*/}
                        {/*        <img src="customer/images/about/6.png" alt="" className="img-fluid"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                {/*</div>*/}
            </section>


        </div>
    );
}

export default Home;