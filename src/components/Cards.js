import React from "react";
import { Col, Card, CardText, CardBody, CardTitle } from "reactstrap";
import { IconCheck } from "../assets/Assets";
import {PrimaryButton} from "./Buttons"
export const CardPlans = ({ title, price, description, items }) => {
  return (
    <Col lg={4}>
      <Card className="mb-4 mb-lg-0">
        <CardBody className={"p-4"}>
          <CardTitle tag="h3">{title}</CardTitle>
          <div className="d-flex align-items-center mb-3">
            <h3 className="mb-0">${price}</h3>
            <p className="text-muted mb-0">/Mensual</p>
          </div>
          <CardText className="text-muted mb-3">{description}</CardText>
          <ul class="list-unstyled mb-3">
            {items.map((item) => {
              return (
                <li class="mb-2">
                  <IconCheck className="me-2" />
                  {item.point}
                </li>
              );
            })}
          </ul>
          <PrimaryButton as='a' href="#" className="btn btn-primary w-100 mb-3">
            Comprar suscripción
          </PrimaryButton>
          <a href="#" class="d-block text-center">
            Comienza tu prueba de 14 días
          </a>
        </CardBody>
      </Card>
    </Col>
  );
};
