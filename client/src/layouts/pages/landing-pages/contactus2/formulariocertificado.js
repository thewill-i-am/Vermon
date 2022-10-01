// import ContactUs2 from "layouts/pages/landing-pages/contactus2/formulariocertificado";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import axios from "axios";
// Ecotrade React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import routes from "routes";
import React, { Fragment, useEffect, useState } from "react";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";







const Formulario = () => {
  const [datos, setDatos] = useState({
    Documento: "",
  });

  // const handleInputChange = (event)=>{
  // // console.log(event.target.value)
  // // esto lo que hacia era mostar literalmente todos lo que se escribia en el input letra por letra
  // setDatos({
  //   ...datos,
  //   [event.target.name]:event.target.value
  // // el name es el name que le pusimos a los inputs hace la relacion
  // })

  // }

  const convertiraBase64 = (Documento) => {
    Array.from(Documento).forEach((Documento) => {
      var reader = new FileReader();
      reader.readAsDataURL(Documento);
      reader.onload = function () {
        var ArrayAuxiliar = [];
        var base64 = reader.result;
        ArrayAuxiliar = base64.split(",");
        console.log(ArrayAuxiliar[1]);

        setDatos({
          ...datos,
          Documento: ArrayAuxiliar[1],

          // el name es el name que le pusimos a los inputs hace la relacion
        });
      };
    });
  };

  const enviarDatos = async (event) => {
    console.log("envio");
    console.log(datos)
    axios
      .post("/crearUsuario", {
        Documento: datos.Documento,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(datos.Documento);
    event.preventDefault();
  };

  return (
    <Fragment>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "info",
        // }}
      />
      <MKBox component="section" py={12}>
        <Container>
          <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
            <MKTypography variant="h3" mb={1}>
              Completa con tu informacion
            </MKTypography>
            <a
              href=" https://drive.google.com/file/d/10bQh24vWfUbipyF7Bb3aIrjP3vaQmoCj/view?usp=sharing "
              download="Swiper, el zorro ladrón"
            >
              Haz clic aquí para descargar el archivo
            </a>
          </Grid>
          <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
            <MKBox width="100%" component="form" method="post" autocomplete="off">
              <MKBox p={3}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="file"
                      name="Documento"
                      onChange={(event) => convertiraBase64(event.target.files)}
                      fullWidth
                    />
                  </Grid>
                  {/* <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Número de telefono" type="number"  name="telefono" onChange={handleInputChange} fullWidth />
                </Grid> */}
                  {/* <Grid item xs={12} md={6}>
                  <MKInput variant="standard"  label="Dirección Regional"  name="direccion" onChange={handleInputChange} fullWidth />
                </Grid> */}
                  {/* <Grid item xs={12} md={6}>
                  <MKInput variant="standard"  label="Servicio que ofrece"  name="servicio" onChange={handleInputChange} fullWidth />
                </Grid> */}
                  {/* <Grid item xs={12}>
                  <MKInput variant="standard" type="email" label="Correo empresarial"  name="email" onChange={handleInputChange} fullWidth />
                </Grid> */}

                  <Grid item xs={12} alignItems="center" ml={-1}>
                    {/* <Switch checked={checked} onChange={handleChecked} /> */}
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      ml={-1}
                      sx={{ cursor: "pointer", userSelect: "none" }}
                      // onClick={handleChecked}
                      type="submit"
                    >
                      {/* &nbsp;&nbsp;I agree the&nbsp; */}
                    </MKTypography>
                    <MKTypography
                      component="a"
                      href="#"
                      variant="button"
                      fontWeight="regular"
                      color="dark"
                    >
                      {/* Terms and Conditions */}
                    </MKTypography>
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} my={2}>
                  <button type="button" onClick={enviarDatos}>
                   Enviar formulario 
                  </button>
                </Grid>
                  <MKTypography variant="p" mb={1}>
            Suba el archivo en formato pdf y presione Enviar formulario
          </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
    </Fragment>
  );
};
export default Formulario;
