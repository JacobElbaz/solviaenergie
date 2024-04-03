import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./Solutions.css";
import calo from "../assets/residence-individuel.jpg";
import pac from "../assets/solvia-hero-2.png";
import iso from "../assets/tertiaire.png";
import { motion } from "framer-motion";

function Solutions() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1, y: 0, transition: { duration: .5 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <div
      className="solutions-container"
      style={{ position: "relative", zIndex: 3, minHeight: '95vh' }}
    >
      <Typography variant="h1" color="white" padding={"1rem"}>
        Nos solutions
      </Typography>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={list}
        className="solutions"
      >
        <motion.div variants={item}>
          <Card className="solution">
            <div
              style={{ height: "150px", width: "inherit", overflow: "hidden" }}
            >
              <img
                src={pac}
                style={{ objectFit: "cover" }}
                alt="pompe à chaleur"
              />
            </div>
            <CardContent className="card-content">
              <Typography variant="h4">
                <a href="/pac-air-eau">Résidentiel <br /> Collectif</a>
              </Typography>
              <Typography>
                La pompe à chaleur peut être le système de chauffage idéal pour
                votre logement. Elle prélève des calories à l'extérieur, dans
                l'air, l'eau ou le sol, puis les transforme pour assurer le
                confort thermique. De ce fait, l'énergie électrique consommée
                est moindre par rapport à celle produite.
              </Typography>
              <Button href="/pac-air-eau">En savoir plus</Button>
              <Button variant="outlined" href="/#contact">
                Contactez-nous
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={item}>
          <Card className="solution">
            <div
              style={{ height: "150px", width: "inherit", overflow: "hidden" }}
            >
              <img
                src={calo}
                style={{ objectFit: "cover" }}
                alt="calorifugeage"
              />
            </div>
            <CardContent className="card-content">
              <Typography variant="h4">
                <a href="/calorifugeage">
                  Maison <br /> Individuelle
                </a>
              </Typography>
              <Typography>
                Le calorifugeage désigne l'isolation des canalisations d'eau et
                de chauffage, permettant d'éviter les déperditions de chaleur,
                notamment dans le cas d'une canalisation qui passe dans une zone
                non chauffée.
              </Typography>
              <Button href="/calorifugeage">En savoir plus</Button>
              <Button variant="outlined" href="/#contact">
                Contactez-nous
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={item}>
          <Card className="solution">
            <div
              style={{ height: "150px", width: "inherit", overflow: "hidden" }}
            >
              <img src={iso} alt="isolation extérieure" />
            </div>
            <CardContent className="card-content">
              <Typography variant="h4">
                <a href="/isolation-exterieur">
                  Tertiaire <br /> Industrie
                </a>{" "}
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                blanditiis magnam doloribus corrupti ab impedit porro veniam
                reiciendis, esse sequi.
              </Typography>
              <Button href="/isolation-exterieur">En savoir plus</Button>
              <Button variant="outlined" href="/#contact">
                Contactez-nous
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Solutions;
