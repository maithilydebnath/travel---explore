import React from 'react';
import { Accordion } from 'react-bootstrap';
import img from '../../images/tours_advanced-scheduling-768x497.png';
const Features = () => {
    return (
        <div className="container p-4">

        <h1 className="text-center pb-2 pt-3 text-primary">Manage your tour schedule in real time with Us</h1>
        <div className="d-flex  justify-content-around">
            <div className="container p-4">
                <div className="row row-1 ">
                    <div className="col-12 col-lg-6 col-md-12 m-0  ">
                        <img className="FAQ-img" src={img} alt="" width="431 px" height="423 px"/>
                    </div>
                    <div className="col-12 col-lg-6 mt-5">
                    <Accordion className="text-start mb-4 mt-2" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><b> 24/7 access for you and your guides</b></Accordion.Header>
                        <Accordion.Body>
                        Access your online tour calendar anywhere, anytime. View reservations, staff/vehicle rosters and payments updated in real time. Easily set what each guide and staffer can see.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><b> Send automatic notifications and reminders</b></Accordion.Header>
                        <Accordion.Body>
                        Reduce costly no-shows with automatic booking confirmation emails and texts automatically sent to your customers.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><b>Track every reservation step</b></Accordion.Header>
                        <Accordion.Body>
                        See when and by whom new and rescheduled bookings, or cancellations were made. Automatically track use of coupon codes, promotional discounts and gift vouchers.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><b>Work on the go with our mobile reservation system</b></Accordion.Header>
                        <Accordion.Body>
                        View and manage your online tour calendar from any mobile device, without downloading an extra app. Bookeo’s interface automatically adjusts to your device screen size and shape.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><b>Stay up to date with Email/TXT</b></Accordion.Header>
                        <Accordion.Body>
                        Keep your tour guides always up to date with automatic email and TXT notifications. So they instantly know about new, rescheduled, or cancelled tours - even when they’re on the go.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><b>Print detailed tour manifest</b></Accordion.Header>
                        <Accordion.Body>
                        Easily print tour manifest with participant details, amounts paid and due, plus any additional options selected during reservation – including pick up and drop off locations. The Bookeo tour booking system is so easy that your guides will thank you!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                        
                    </div>


                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Features;