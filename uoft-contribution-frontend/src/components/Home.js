import React, {Component} from 'react';
import ps5 from '../PS5.jpeg'
import xbox from '../XBOX.jpg'

import {Container, Row, Col, Alert, Image} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div>
                <Alert variant="warning">
                    <Alert.Heading>Hello Gamer!</Alert.Heading>
                    <p>
                        Welcome to WebSiteBot where you can buy a PS5 or Xbox X. Just click on either a
                        PS5 or Xbox below and get forwarded to the available suppliers!
                    </p>
                    <hr />
                    <p className="mb-0">
                        This project is being maintained by Alex Kocab
                    </p>
                </Alert>

                <br />
                
                <Container>
                    <a href = '/suppliers/ps5'><Image src={ps5} width="500"  rounded/></a>
                    {' '}
                    <a href = '/suppliers/xbox'><Image src={xbox} width="500" rounded/></a>
        
                </Container>
                

                
            </div>
        );
    }
}

export default Home;