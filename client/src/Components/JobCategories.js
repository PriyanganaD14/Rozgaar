import React from 'react';
import {
    Card,CardImg,CardDeck,CardBody
  } from 'reactstrap';
  import './Style/JobCategories.css';
  import driver from './Assets/taxiDriver.png';
  import deliveryboy from './Assets/deliveryBoy.png';
  import fieldsales from './Assets/fieldSales.png';
  import receptionist from './Assets/receptionist.png';
  import cook from './Assets/cook.png';
  import maid from './Assets/maid.png';
  import mason from './Assets/bricklayer.png';
  import securityguard from './Assets/securityGuard.png';
  

const JobCategories = ()=>{
    return (
         <div>
             <div>
              <CardDeck>
      <Card className="hvr">
        <CardImg className="mid" src={driver} style={{width:70,height:80}} alt="Card image cap" />
        <CardBody className="mid">
        <div className="font">DRIVER</div>
        </CardBody>
      </Card>
      <Card className="hvr">
        <CardImg className="mid"  src={deliveryboy} style={{width:70,height:80}} alt="Card image cap" />
        <CardBody className="mid">
          <div className="font">DELIVERY BOY</div>
        </CardBody>
      </Card>
      <Card className="hvr">
        <CardImg className="mid"  src={fieldsales}style={{width:70,height:80}} alt="Card image cap" />
        <CardBody className="mid">
          <div className="font">FIELD SALES</div>
        </CardBody>
      </Card>
       <Card className="hvr">
        <CardImg className="mid"  src={receptionist}style={{width:70,height:80}} alt="Card image cap" />
        <CardBody className="mid">
          <div className="font">RECEPTIONIST</div>
        </CardBody>
      </Card>
      </CardDeck>
      </div>
      <div className="mt-4 mb-4">
              <CardDeck>
      <Card className="hvr">
        <CardImg className="mid" src={cook}style={{width:70,height:80}} alt="Card image cap" />
        <CardBody className="mid">
          <div className="font">COOK</div>
        </CardBody>
      </Card>
      <Card className="hvr">
        <CardImg className="mid" src={maid}style={{width:70,height:80}} alt="Card image cap" />
        <CardBody className="mid">
          <div className="font">MAID/SERVANT</div>
        </CardBody>
      </Card>
      <Card className="hvr">
        <CardImg className="mid"  src={mason} style={{width:70,height:80}} alt="Card image cap" />
        <CardBody className="mid">
          <div className="font">MASON</div>
        </CardBody>
      </Card>
       <Card className="hvr">
        <CardImg className="mid"  src={securityguard} style={{width:70,height:80}} alt="Card image cap" />
        <CardBody className="mid">
          <div className="font">SECURITY GUARD</div>
        </CardBody>
      </Card>
      </CardDeck>
         </div>
         </div>
    );
};


export default JobCategories;