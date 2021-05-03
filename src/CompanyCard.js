import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

function CompanyCard ( { company } ) {

    // render details on individual company
    return (
      <div>
        <Link to={`/companies/${company.handle}`} key={company.id}>
        <Card>
          <CardBody>
            <CardTitle>
            {company.name}
            </CardTitle>
            <CardImg right src={company.logoUrl} alt={`${company.name} logo`}/>
            <CardText className="text-left">
            <p>{company.description}</p>
            <p>Employees: {company.numEmployees} </p>
            </CardText>
          </CardBody>
        </Card>
        </Link>
      </div>
    );
  }
  
  export default CompanyCard;
  