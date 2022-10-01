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
import Divider from "@mui/material/Divider";

// Ecotrade React components
import MKBox from "components/MKBox";

// Ecotrade React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={1}
              // suffix="+"
              title="Software"
              description="Desarrollar un Software que sea capaz de construir una imagen única e irremplazable que le pertenezca a la entidad y ofrezca datos sobre sus cualidades a nivel “ecológico”."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={2}
              // suffix="+"
              title="NFTs"
              description="Idear una página web, en la cual se puede registrar en una base de datos con qué NFTs cuentan las entidades. 
"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={3}
              title="Proceso de certificación"
              description=" Investigar el proceso de certificación y asesoría a empresas para oficializar las empresas en los títulos de desarrollo sostenible.
"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
