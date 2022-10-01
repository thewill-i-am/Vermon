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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Ecotrade React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/pagesData";
import nft2 from "pages/imagenes/nft2.png";
import nft1 from "pages/imagenes/nft1.png";
import logo from "pages/imagenes/logo.jpg";



function Pages() {
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Conocenos"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
          Nuestro marco de trabajo
          </MKTypography>
          <MKTypography variant="body1" color="text">
           La manera mas sencilla de dar un mensaje
            <br /> es con acciones
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "13%" }}>
            <MKBox position="relative">
              <MKBox component="img" src={nft2} alt="nft2"   width="50%" />
            </MKBox>
          </Grid>
            <Grid item xs={12} md={5} sx={{ ml: "2%" }}>
            <MKBox position="relative">
              <MKBox component="img" src={nft1} alt="nft1"   width="50%" />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={3} sx={{ ml: "36%" }}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
               Ejemplos de nuestros NFTs.
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
              Nuestros procesos son gratuitos, el pago es a la naturaleza y el bienestar es para todos.
              </MKTypography>
            </MKBox>
          </Grid>
             <Grid item xs={12} md={5} sx={{ ml: "30%" }}>
            <MKBox position="relative">
              <MKBox component="img" src={logo} alt="logo"   width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;
