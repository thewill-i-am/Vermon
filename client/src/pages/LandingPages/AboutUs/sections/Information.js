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
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="NFT"
                    description="Las siglas de NFT significan Non -Fungible Token, un token no fungible. Los tokens son unidades de valor que se le asignan a un modelo de negocio, como por ejemplo el de las criptomonedas."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="payments"
                    title="Empresas"
                    description="Los NFT seraan entregado a las empresas que cumplan los requisitos para las insignias"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="apps"
                    title="Ambiente"
                    description="promovemos el cuido del ambiente"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="3p"
                    title="Bienes sociales"
                    description="Promovemos las ayudas sociales"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.ctfassets.net/b4k16c7lw5ut/2gc1UApE6TudBzFAe6qaVp/b83dc50bf970447071a1294cf87e331b/watermark-free-video-editor__1_.jpg?w=1920&h=1080&q=50&fm=webp"
              title="preguntas frecuente"
              description="Si tienes alguna pregunta frecuente sobre lo que hacemos."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "mas informacion",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
