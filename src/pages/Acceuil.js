import React from "react";
import Partenaires from "../components/Partenaires";
import Solutions from "../components/Solutions";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import LittleAbout from "../components/LittleAbout";

function Acceuil() {
  return (
    <div>
      <Helmet>
        <title>Solvia | Acceuil</title>
        <meta
          name="description"
          content="Bienvenue sur la page d'acceuil de Solvia Energie, vous y découvrirez toutes nos solutions énergétiques."
        />
      </Helmet>
      <Hero />
      <LittleAbout />
      <Solutions />
      <Partenaires />
    </div>
  );
}

export default Acceuil;
