import React from "react";
import { CardPlans } from "./Cards";

export const Plans = () => {
  return (
    <>
      <section class="bg-white px-2 px-sm-0 text-dark">
        <div class="container">
          <div class="text-center pb-3">
            <h1>Planes pensados para ti</h1>
            <p class="lead text-muted">
              Elige el plan que se adapte a tus necesidades
            </p>
          </div>
          <div class="row">
            <CardPlans
              title="Básico"
              price="129"
              description="Perfecto para estudiantes y profesionales que estén iniciando en el diseño UX/UI"
              items={[
                { point: "Acceso a más de 100 cursos" },
                { point: "Mensaje directo a los instructores" },
                { point: "Cursos nuevos cada mes" },
              ]}
            />
            <CardPlans
              title="Profesional"
              price="349"
              description="Perfecto para estudiantes y profesionales que estén iniciando en el diseño UX/UI"
              items={[
                { point: "Acceso a más de 2500 cursos" },
                { point: "Mensaje directo a los instructores" },
                { point: "Cursos nuevos cada mes" },
              ]}
            />
            <CardPlans
              title="Premium"
              price="599"
              description="Perfecto para estudiantes y profesionales que estén iniciando en el diseño UX/UI"
              items={[
                { point: "Acceso a todos los cursos" },
                { point: "Cursos exclusivos" },
                { point: "Cursos nuevos cada mes" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};
