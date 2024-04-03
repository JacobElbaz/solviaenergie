import React from "react";
import domofinance from "../assets/domofinance.png";
import qualibat from "../assets/qualibat.avif";
import garantie from "../assets/garantie.png";
import smabtp from "../assets/smabtp.png";
import "./Partenaires.css";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

function Partenaires() {
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
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 100 },
  };
  return (
    <div className="partenaires">
      <Typography variant="h1">Ils nous font confiance</Typography>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={list}
          className="paper"
        >
          <motion.a
            variants={item}
            href="https://www.domofinance.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={domofinance} alt="domofinance" />
          </motion.a>
          <motion.a
            variants={item}
            href="https://www.qualibat.com/nos-missions/le-rge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={qualibat} alt="qualibat rge" />
          </motion.a>
          <motion.a
            variants={item}
            href="https://www.service-public.fr/particuliers/vosdroits/F2034"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={garantie} alt="service public" />
          </motion.a>
          <motion.a
            variants={item}
            href="https://www.groupe-sma.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={smabtp} alt="groupe sma" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Partenaires;
