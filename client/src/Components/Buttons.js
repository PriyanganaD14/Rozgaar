import React from 'react';



import CarouselSection from './CarouselSection';
import WhatWhere from './WhatWhere';
import './Style/Buttons.css';
import Cards from './Cards';


const Buttons = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                    <div className="row justify-content-center">
                        <WhatWhere />
                    </div>
                </div>
                <div className="col-md-3">
                    <CarouselSection />
                </div>

                <div className="setmiddle">
                    <Cards />
                </div>
                <br /><br /><br />
            </div>
        </div>
    );
};


export default Buttons;


