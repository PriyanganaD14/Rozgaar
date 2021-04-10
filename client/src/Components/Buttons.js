import React from 'react';

import "./Style/Buttons.css";

import CarouselSection from './CarouselSection';
import WhatWhere from './WhatWhere';

const Buttons = ()=>{
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                    <div className="row justify-content-center">
                        <WhatWhere />
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button type="submit" className="btn btn-outline-primary iwk">I Need Job</button>
                        <button type="submit" className="btn btn-outline-primary iwk">I Need Staff</button>
                    </div>
                </div>
                <div className="col-md-3">
                    <CarouselSection />
                </div>
            <br/><br/>
            </div>
        </div>
    );
};


export default Buttons;