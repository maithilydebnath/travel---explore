import React from 'react';
import banner1 from '../../images/whyus.png';
import banner2 from '../../images/whyUs2.png';
import banner3 from '../../images/whyus3.png';
import banner4 from '../../images/whyus4.png';
import './WhyUs.css'
const WhyUs = () => {
    return (
        <div className="container mb-4">
            <h2 className="text-primary mt-5 mb-4"> <b>Why Book With Us?</b></h2>
            <p>Travel and Explore is a global full service online travel agency with the power to offer its customers cheap travel online in Australia and around the world. Our one-stop website provides our customers with the ability to book flights and accommodation to almost anywhere in the world.</p>
            <p>Our website can also help you organise your travel insurance and all your required visas for your trip and remember our friendly team of online travel agents are just a quick phone call away if you have any questions or if you get stuck.</p>
            <div className=" mt-4 mb-4 row row-cols-1 row-cols-md-2 g-5">
            <div className="col">
                <div className="card">
                    <div className="text-center">
                    <img src={banner1} className=" iconfor" alt="..."/>
                    </div>
                
                {/* <img src={banner1} className="iconfor" alt="" srcset="" /> */}
                <div className="card-body">
                    <h5 className="card-title">Huge Savings</h5>
                    <p className="card-text">Our offered price is proven in the market to convert well, making money for YOU!</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <div  className="text-center">
                    <img src={banner2} className="iconfor" alt="..."/>
                    </div>
                
                <div className="card-body">
                    <h5 className="card-title">Biggest Selection of services</h5>
                    <p className="card-text">From flights to luxury hotels to rental cars, we have something for everyone!</p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <div  className="text-center">
                <img src={banner3} className="iconfor" alt="..."/>
            </div>
                
                <div className="card-body">
                    <h5 className="card-title">Easy to Use</h5>
                    <p className="card-text">You don't have to be an expert to get our website up and running – it's intuitive and easy to learn. </p>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <div  className="text-center">
                <img src={banner4} className="iconfor" alt="..."/>
            </div>
                
                <div className="card-body">
                    <h5 className="card-title">Help is On Hand</h5>
                    <p className="card-text">A dedicated support team is available to help you with any problems you might have.</p>
                </div>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default WhyUs;