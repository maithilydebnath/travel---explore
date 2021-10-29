import { Carousel } from 'react-bootstrap';
import React from 'react';
import banner1 from '../../../images/Pic1.jpg';
import banner2 from '../../../images/Pic2.jpg';
import banner3 from '../../../images/Pic3.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-background text-white">
                            <h2>Travel & Explore</h2>
                            <p>We provides our customers with the ability to book flights and accommodation to almost anywhere in the world.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-background text-white">
                            <h3 >Travel & Explore</h3>
                            <p>Our online booking system makes it easy to list your upcoming tours  </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-background text-white">
                            <h3>Travel & Explore</h3>
                            <p>Plan and explor with us</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        </div>
    );
};

export default Banner;