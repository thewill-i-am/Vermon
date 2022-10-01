/*
=========================================================
* Ecotrade React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Ecotrade React components
import MKBox from "components/MKBox";

// Ecotrade React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                // icon="touch_app"
                title={
                  <>
              Importancia
                    <br />
                    
                  </>
                }
                description="La elaboración de los certificados y asesorías para llevar a cabo el proceso es lento y arduo. Se busca hacer de manera eficaz y automatizada el proceso de certificación. 
"
              />
              <RotatingCardBack
                image={bgBack}
                title="Descubre más"
                description="Nuestra idea se basa en la elaboración, optimización y mejoramiento, la perfección y buscar un desarrollo sostenible para el bien de las futuras generaciones del planeta por medio de las TICs."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Empezar",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Certificados ambientales"
                  description="Los sistemas de gestión ambiental: se trata de programas que certifican los procesos de producción dentro de las empresas, combinando eficiencia en la producción y el mínimo impacto ambiental. En éste se incluyen las conocidas certificaciones ISO 14001, las cuales pueden aplicarse en cualquier empresa que procure reducir su impacto ambiental y cumplir con la legislación ambiental aplicable."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Facibilidad"
                  description="La comunicación moderna de los TICs nos permite generar estas soluciones en un par de clicks."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Ahorra tiempo y dinero"
                  description="Este software está realizado para optimizar los procesos actuales, y gracias a esta solución vemos mejoras en tiempo, dinero y ambiente."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Tecnología Moderna"
                  description="Es adaptable a las nuevas tecnologías multiplataforma."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
