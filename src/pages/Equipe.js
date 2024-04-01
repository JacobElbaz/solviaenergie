import React from "react";
import CarteDeVisite from "../components/CarteDeVisite";
import { Typography } from "@mui/material";
import img from "../assets/calo.webp";

function Equipe() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div className="my-5">
        <Typography
          variant="h1"
          color="primary"
          fontWeight="bold"
          textAlign="center"
          marginTop={"70px"}
          padding={"1rem"}
        >
          Notre équipe
        </Typography>
        <Typography variant="h6" textAlign="center" marginInline={"1rem"}>
          Notre équipe vous accompagne avec le sourire tout au long de votre
          projet de rénovation énergétique
        </Typography>
      </div>
      <div className="cartes-container">
        <CarteDeVisite image={img} fullname={"Sacha Giuili"} role={"Directeur"} email={"sacha@solviaenergie.fr"}></CarteDeVisite>
        <hr />
        <CarteDeVisite image={img} fullname={"Daniel Bentolila"} role={"Chef de projet"} email={"daniel@solviaenergie.fr"}></CarteDeVisite>
        <hr />
        <CarteDeVisite image={img} fullname={"Nathan Bensimhon"} role={"Chef de projet"} email={"nathan@solviaenergie.fr"}></CarteDeVisite>
      </div>
    </div>
  );
}

export default Equipe;
