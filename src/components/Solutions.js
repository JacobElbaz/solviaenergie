import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./Solutions.css";
import calo from "../assets/calo.webp";
import pac from "../assets/pac.webp";
import iso from "../assets/iso.webp";
import { motion } from "framer-motion";

function Solutions() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
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
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <div className="solutions-container" style={{position: 'relative', zIndex: 3}}>
      <Typography variant="h1" color="white" padding={'1rem'}>
        Nos solutions
      </Typography>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={list}
        viewport={{ once: true }}
        className="solutions"
      >
        <motion.div variants={item}>
          <Card className="solution">
            <div
              style={{ height: "150px", width: "inherit", overflow: "hidden" }}
            >
              <img src={pac} alt="pompe à chaleur" />
            </div>
            <CardContent className="card-content">
              <Typography variant="h4">
                <a href="/pac-air-eau">Pompe à chaleur</a>
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
              <img src={calo} alt="calorifugeage" />
            </div>
            <CardContent className="card-content">
              <Typography variant="h4">
                <a href="/calorifugeage">Calorifugeage</a>
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
                <a href="/isolation-exterieur">Isolation exterieure</a>
              </Typography>
              <Typography>
                L'isolation des murs par l'extérieur obéit au principe suivant :
                la pose d'une enveloppe isolante tout autour du bâti de la
                maison. Une solution qui permet, notamment, d'éliminer les ponts
                thermiques. Ce sont des zones de faiblesse de l'isolation
                responsables d'une forte déperdition d'énergie dans votre
                logement.
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
