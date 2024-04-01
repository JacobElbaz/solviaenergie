import { Button } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

function Hero() {
  const ref = React.useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0.3", "1.5 1"],
  });
  const yTranslate = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.5,
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
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.div style={{ translateY: yTranslate }} className="hero">
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.329)" }}>
        <motion.div
        >
          <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            variants={list}
            style={{ opacity: scrollYProgress }}
            className="hero-text"
            viewport={{ once: true }}
          >
            <motion.h1 style={{marginInline: '1rem'}} variants={item}>Expertise et engagement <br /> pour une transition énergétique durable</motion.h1>
            <motion.div variants={item}><Button href={'/#contact'} style={{color: 'white'}} variant={"contained"}>Contactez nous</Button></motion.div>
            
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
