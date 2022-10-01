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
import MKTypography from "components/MKTypography";

// Ecotrade React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "pages/imagenes/isa.jpg";
import team2 from "pages/imagenes/jose.jpg";
import team3 from "pages/imagenes/karla.jpg";
import team4 from "pages/imagenes/eytan.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Ecotrade Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              somos el equipo que buscas
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Isabella Aguilar"
                position={{ color: "info", label: "React development" }}
                description="Encargada de la programacion de la pagina."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Jose David Hidalgo"
                position={{ color: "info", label: "Coordinador" }}
                description="Coordinador, es el encargado de que todos cumplan las funciones, ademas de el encargado del diseño"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Karla Calderón"
                position={{ color: "info", label: "Diseñadora" }}
                description="Encargada del diseño de la pagina."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Eytan Sierra "
                position={{ color: "info", label: "Diseñador" }}
                description="Encargado del diseño de la pagina"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
