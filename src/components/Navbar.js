import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { PrimaryButton, BaseButton } from "./Buttons";
import { Logo } from "../assets/Assets";

export const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    debugger;
    setIsOpen(!isOpen);
  };

  return (
    <Navbar expand="lg">
      <Container className="d-flex justify-content-between">
        <NavbarBrand href="/" className="flex-grow-1">
          <Logo />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className={"justify-content-between"}>
          <Nav navbar>
            <NavItem>
              <NavLink href="#" className="text-white">
                Inicio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-white">
                Cursos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-white">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="text-white">
                Compañia
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="d-flex flex-sm-row flex-column">
            <BaseButton as='a' href='#' className="btn btn-outline-light btn-sm me-0 me-sm-3 d-block d-sm-inline-block">
              Iniciar sesión
            </BaseButton>
            <PrimaryButton as='a' href='#' className="btn btn-primary btn-sm d-block d-sm-inline-block">
              Regístrate
            </PrimaryButton>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
