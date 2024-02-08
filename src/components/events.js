import React from 'react';
import './events.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pune from './pune.jpg';
import mumbai from './mumbai.jpg';
import {  Row, Col} from 'react-bootstrap';

const Events = () => {
    return(
        <div className='event-container'>
            <p className='heading'>Events</p>
           <p className='event-heading'>Gather.Connect.Thrive <br></br>Where Moments Become Movements</p>
           {/* <p className='event-subheading'>Where Moments Become Movements</p> */}
           <div className='cards'>
           <Row xs={1} md={2} className="g-4">
           <Col>
          
           <Card border="dark" style={{ width: '80vh' }}>
                <Card.Img variant="top" src={pune} />
                <Card.Body className="py-0">
                <Card.Title>Pune</Card.Title>
               
                </Card.Body>
                </Card>
                
                
                
                
                
           </Col>
           <Col>
           <Card border="dark" style={{  width: '80vh' }}>
                <Card.Img variant="top" src={mumbai}  />
                <Card.Body  className="py-0">
                <Card.Title >Mumbai</Card.Title>
                
                
                </Card.Body>
                </Card>
           </Col>
           </Row>
                
                

           </div>
           
        </div>
       

    );
}


export default Events;