import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";
import Card from "reactstrap/lib/Card";
import CardHeader from "reactstrap/lib/CardHeader";
import CardImg from "reactstrap/lib/CardImg";
import CardBody from "reactstrap/lib/CardBody";
import { generatePhotoPlaceholderURL } from 'react-placeholder-image';
import CardFooter from "reactstrap/lib/CardFooter";
import { NavLink as RouterNavLink } from "react-router-dom";



class Content extends Component {

  
  render() {

  
    return (
        <div className="next-steps p-5">
                <RouterNavLink
      to="/balance"
      activeClassName="router-link-exact-active"
    >
        <Card className="text-center mb-5 h-100 w-100'"  style={{cursor : 'pointer' }}>
          <Row></Row>

          <CardHeader className="">Available Balance</CardHeader>
          <CardImg  src={generatePhotoPlaceholderURL(200, 100)}></CardImg>
          <Row>
            <Col></Col>
          </Row>
          <CardBody></CardBody>
          <CardFooter></CardFooter>
          </Card>
          </RouterNavLink>
        <Row className="d-flex justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i} md={5} className="mb-4" style={{cursor : 'pointer' }}>
              
              <Card className="text-center mb-5 h-100 w-100'">
              
              
                <CardHeader className="">{col.title}</CardHeader>

                <CardImg  src={generatePhotoPlaceholderURL(200, 100)}></CardImg>
                <CardBody>
                  { isNaN(col.description)?col.description: ""}
                  </CardBody>
                <CardFooter>{col.description}</CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;

