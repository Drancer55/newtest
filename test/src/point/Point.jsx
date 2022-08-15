// Points of interest component
import React from "react";
import './point.css';
import { Card } from "react-bootstrap";
import point from './points'

const Point = () => {

    return (
        <div className="points">
            <h1 className="logo">LOGO</h1>
            <div className="pointcard">
                {point.map((item) => (
                    // Card by Bootstrap
                    <Card key={item.id} border="light" style={{
                        width: '23vh',
                        minWidth: 'max-content',
                        borderRadius: '30px',
                        height: '22vh'
                    }}
                        className="cards">
                    <Card.Body>
                        <Card.Text>
                            <div className="imagen-bkn"></div>
                            <img src={item.img} alt={item.name} />        
                            <p>{item.name}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>))}
            </div>
        </div>
    )
};

export default Point;