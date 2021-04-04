import React from 'react';
import { Container } from 'reactstrap';
import "./Style/Buttons.css";


const Buttons = ()=>{
    return (
        <Container className="container">
             <button type="submit" className="btn btn-outline-primary iwj ">I Need Job</button>
             <button type="submit" className="btn btn-outline-primary iwk">I Need Staff</button>
             <br/><br/>
        </Container>
    );
};


export default Buttons;