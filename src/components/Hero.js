import React from "react";
import {Container} from 'reactstrap'
import {PrimaryButton, BaseButton} from './Buttons'
import {ImageHero} from '../assets/Assets'

export const Hero = () => {
  return (
    <section className="px-2 px-sm-0">
      <Container className="text-center">
        <div className="row pb-6">
          <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <h1 className="text-white font-weight-bold">
              La mejor plataforma para impulsar tu carrera de UX/UI
            </h1>
            <p className="lead text-muted">
              Contamos con la comunidad más grande de expertos en UX/UI para
              brindarte el contenido ideal para tu aprendizaje
            </p>
            <BaseButton
              href=""
              className="btn btn-outline-light me-0 me-sm-3 d-block d-sm-inline-block mb-3 mb-sm-0"
            >
              Prueba gratis 7 días
            </BaseButton>
            <PrimaryButton href="" className="btn btn-primary d-block d-sm-inline-block">
              Comienza tu carrera
            </PrimaryButton>
          </div>
        </div>
        <a href="#">
          <ImageHero/>
        </a>
      </Container>
    </section>
  );
};
