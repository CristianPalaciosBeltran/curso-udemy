import React from "react";
import { Container } from "reactstrap";
import {
  LogoAmazon,
  LogoFacebook,
  LogoLinkedin,
  LogoMicrosoft,
  LogoGoogle,
} from "../assets/Assets";

export const CompaniesLogos = () => {
  return (
    <section className="px-2 px-sm-0 ">
      <Container className=" text-center">
        <p className="lead text-muted mb-5">
          Empresas que confian en nosotros para capacitar a su equipo
        </p>
        <LogoLinkedin className="img-fluid mb-3 mb-sm-0" />
        <LogoFacebook className="img-fluid mb-3 mb-sm-0" />
        <LogoMicrosoft className="img-fluid mb-3 mb-sm-0" />
        <LogoAmazon className="img-fluid mb-3 mb-sm-0" />
        <LogoGoogle className="img-fluid" />
      </Container>
    </section>
  );
};
