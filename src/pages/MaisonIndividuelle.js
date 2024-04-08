import React from "react";
import { Container, Typography } from "@mui/material";
import image from "../assets/maison.webp";
import video from "../assets/videos/pac.mp4";
import image2 from "../assets/pac-air-eau.jpg";
import video2 from "../assets/videos/iso.mp4";
import image3 from "../assets/isolation.webp";

function MaisonIndividuelle() {
  return (
    <>
      <div className="maison-hero">
        <h1>Maison Individuelle</h1>
      </div>
      <Container>
        <Typography
          variant="h1"
          color="primary"
          fontWeight="bold"
          textAlign="center"
          marginTop={"70px"}
          padding={"1rem"}
        >
          Pompe à chaleur Air/Air
        </Typography>
        <img src={image} alt="pompe à chaleur" className="page-img" />
        <Typography variant="h5" color="primary">
          Tout savoir sur la pompe à chaleur Air-Air
        </Typography>
        <Typography fontStyle="italic">
          La pompe à chaleur air-air utilise les calories de l'air, une énergie
          gratuite, pour chauffer efficacement et à moindre coût votre logement.
          Elle permet, en effet, de diviser par 3 votre facture de chauffage.
          Ces économies font de la pompe à chaleur air-air un système rentable
          en seulement quelques années.
        </Typography>
        <Typography variant="h5" color="primary">
          Comment fonctionne une PAC air-air ?
        </Typography>
        <Typography>
          Le principe de fonctionnement de la pompe à chaleur air-air est
          simple. L'appareil capte les calories présentes dans l'air extérieur
          pour chauffer un logement. Pour fonctionner, la pompe à chaleur a
          besoin de deux unités. L'une, située à l'extérieur, récupère les
          calories de l'air et l'autre, à l'intérieur, la diffuse au sein du
          logement grâce à un ventilo-convecteur.
        </Typography>
        <Typography variant="h5" color="primary">
          Vos factures de chauffage divisées par 3 !
        </Typography>
        <Typography>
          En utilisant l'énergie gratuite de l'air, vous ne payez que
          l'électricité nécessaire à la circulation du fluide caloporteur pour
          faire fonctionner la pompe à chaleur. Vous pouvez ainsi diviser vos
          factures de chauffage par 3. Ces économies permettent d'amortir en
          seulement quelques années le prix de la pompe à chaleur air-air qui
          varie entre 1.600 € et 2.800 € par unité intérieure installée.
        </Typography>
        <Typography variant="h5" color="primary">
          Puis-je installer une PAC air-air chez moi ?
        </Typography>
        <Typography>
          L'installation d'une pompe à chaleur air-air est très simple. En
          effet, il suffit de disposer d'un jardin ou d'une cour pour y
          installer l'unité extérieure. Un conseil : choisissez un emplacement
          qui occasionne le moins de bruit pour le voisinage (distance minimale,
          éviter les angles et recoins qui renvoient le son). Il vous faut aussi
          un emplacement dans votre logement pour installer les unités
          intérieures. Les ventilo-convecteurs s'installent simplement au-dessus
          des portes des pièces à chauffer. La jonction entre les deux est
          assurée par un circuit de fluide frigorigène.
        </Typography>
        <Typography variant="h4" component="h5" color="primary">
          ATTENTION IMPORTANT !!
        </Typography>
        <Typography fontWeight="bold">
          Pour bénéficier des différentes aides mises en place par l'Etat ,
          telles que celles de l'Anah ou les primes énergie, l'installation de
          votre PAC air-air doit être réalisée par un professionnel certifié
          Reconnu Garant de l'Environnement.
        </Typography>

        <Typography
          variant="h1"
          color="primary"
          fontWeight="bold"
          textAlign="center"
          marginTop={"70px"}
          padding={"1rem"}
        >
          Pompe à chaleur Air/Eau
        </Typography>
        <div style={{ textAlign: "center" }}>
          <video src={video} controls loop autoPlay muted></video>
        </div>
        <Typography variant="h5" color="primary">
          Tout savoir sur la pompe à chaleur Air-Eau
        </Typography>
        <Typography fontStyle="italic">
          La pompe à chaleur air-air utilise les calories de l'air, une énergie
          gratuite, pour chauffer efficacement et à moindre coût votre logement.
          Elle permet, en effet, de diviser par 3 votre facture de chauffage.
          Ces économies font de la pompe à chaleur air-air un système rentable
          en seulement quelques années.
        </Typography>
        <Typography variant="h5" color="primary">
          Comment fonctionne une PAC air-eau ?
        </Typography>
        <Typography>
          A la différence de la pompe à chaleur air-air qui puise l'énergie dans
          l'air extérieur et la restitue sous forme d'air chaud, la pompe à
          chaleur air-eau, puise les calories dans l'air extérieur mais utilise
          l'eau pour transporter la chaleur. La plupart des modèles cessent de
          fonctionner dès que la température descend sous les -5°C, rendant
          indispensable un chauffage d'appoint dans certaines régions.
          Néanmoins, certains modèles, plus performants peuvent être
          opérationnels jusqu'à -25°C. Les performances de votre pompe à chaleur
          dépendent donc du climat de votre région. Cette solution n'est pas la
          plus adaptée lorsque votre région est soumise à des hivers rigoureux
          et des températures négatives. En effet, plus vous sollicitez
          l'électricité pour réchauffer l'eau de chauffage de votre
          installation, moins le rendement de votre pompe à chaleur air-eau est
          important et plus vous consommez d'énergie.
        </Typography>
        <img src={image2} alt="pompe à chaleur" className="page-img" />
        <Typography variant="h5" color="primary">
          La pompe à chaleur air-eau se compose de quatre composants
        </Typography>
        <Typography>
          La pompe à chaleur air-eau se présente, pour la plupart des modèles,
          sous la forme d'un monobloc. Elle se compose de 4 éléments :
          <li>
            L'évaporateur qui permet la transformation du fluide frigorigène en
            vapeur ;
          </li>
          <li>
            Le compresseur qui augmente la pression et la chaleur du gaz ;
          </li>
          <li>
            Le condenseur qui permet au fluide frigorigène de restituer la
            chaleur à l'eau de chauffage ;
          </li>
          <li>
            Le détendeur qui diminue la pression et la température du gaz.
          </li>
        </Typography>
        <Typography variant="h5" color="primary">
          Le rendement de la pompe à chaleur air-eau
        </Typography>
        <Typography>
          Pour produire du chauffage, la pompe à chaleur air-eau consomme de
          l'électricité. Elle a notamment besoin d'un moteur électrique pour
          compresser le fluide frigorigène. Le rendement d'une pompe à chaleur
          est exprimé par son COP (Coefficient de performance). Il traduit la
          quantité de chaleur produite par rapport à l'énergie électrique
          consommée par le compresseur. Plus le COP est élevé, plus la pompe à
          chaleur est performante. Une pompe à chaleur air-eau ayant un
          coefficient de performance (COP) de 3 permet de restituer 3 kWh
          d'énergie thermique pour 1 kWh d'énergie électrique consommée.
        </Typography>
        <Typography variant="h4" component="h5" color="primary">
          ATTENTION IMPORTANT !!
        </Typography>
        <Typography fontWeight="bold">
          Pour bénéficier des différentes aides mises en place par l'Etat ,
          telles que celles de l'Anah ou les primes énergie, l'installation de
          votre PAC air-air doit être réalisée par un professionnel certifié
          Reconnu Garant de l'Environnement.
        </Typography>

        <Typography
          variant="h1"
          color="primary"
          fontWeight="bold"
          textAlign="center"
          marginTop={"70px"}
          padding={"1rem"}
        >
          Isolation Thermique Extérieure
        </Typography>
        <div style={{ textAlign: "center" }}>
          <video src={video2} controls loop autoPlay muted></video>
        </div>
        <Typography variant="h5" color="primary">
          Principe et fonctionnement de l'isolation des murs par l'extérieur
        </Typography>
        <Typography fontStyle="italic">
          Avant de débuter des travaux d'isolation thermique (également connu
          sous le nom d'isolation thermique par l'extérieur [ITE]), et en
          particulier des travaux d'isolation des murs par l'extérieur, il est
          nécessaire de connaître quelques éléments de base : Les techniques
          d'isolation utilisent des enduits, des bardages ou des vêtures qui
          vont embellir l'aspect extérieur de votre maison. Isoler vos murs par
          l'extérieur nécessite une déclaration préalable de travaux ou dans
          certains cas une demande de permis de construire.
        </Typography>
        <Typography variant="h5" color="primary">
          Une enveloppe isolante autour de la maison
        </Typography>
        <Typography>
          L'isolation des murs par l'extérieur obéit au principe suivant : la
          pose d'une enveloppe isolante tout autour du bâti de la maison. Une
          solution qui permet, notamment, d'éliminer les ponts thermiques. Ce
          sont des zones de faiblesse de l'isolation responsables d'une forte
          déperdition d'énergie dans votre logement. Les plus importants se
          situent aux jonctions suivantes : entre la toiture et les murs, entre
          les murs et les menuiseries des fenêtres, entre les planchers et les
          murs et entre les balcons et les murs. La vapeur d'eau se condense sur
          ces points plus froids, engendrant la formation de traces noires et de
          moisissures, comme l'explique l'Ademe. Le traitement des ponts
          thermiques, par ce type d'isolation, permet de limiter les effets de
          la condensation grâce à la continuité de l'isolant.
        </Typography>
        <Typography variant="h5" color="primary">
          Une isolation de l'extérieur conçue pour réaliser des économies durant
          des décennies
        </Typography>
        <Typography>
          Le coût des travaux d'isolation par l'extérieur est important mais il
          s'agit d'un investissement durable et rentable. En effet, l'isolation
          de vos murs par l'extérieur vous permet de réaliser de substantielles
          économies et de voir diminuer votre facture de chauffage. Autre
          avantage de l'isolation des murs par l'extérieur, vous n'avez pas à
          quitter votre habitation pendant la durée des travaux. Vous pouvez
          ensuite profiter du confort thermique de votre maison pendant de très
          longues années, car une isolation par l'extérieur réalisée par un
          professionnel qualifié va se révéler efficace durant des décennies.
        </Typography>
        <Typography variant="h5" color="primary">
          Des isolants possédant une longue durée de vie
        </Typography>
        <img src={image3} alt="isolation" className="page-img" />
        <Typography>
          Seule la laine de verre peut perdre de ses capacités isolantes au bout
          de 20 ans environ, sous l'effet de l'humidité, d'où l'intérêt de bien
          choisir ses matériaux avant de débuter les travaux. Pour le reste des
          isolants, il faut savoir que la laine de roche, le verre cellulaire,
          les plumes de canard ou le polystyrène expansé gardent des
          performances optimales entre 40 et 60 ans ; le liège, la laine de
          coco, le polystyrène extrudé ou encore le polyuréthane, quant à eux,
          atteignent les 100 ans. Autre performance, la laine de chanvre ou de
          la fibre de bois assurent l'isolation de votre logement pendant plus
          d'un siècle.
        </Typography>
        <Typography variant="h5" color="primary">
          L'importance de l'intervention d'un professionnel
        </Typography>
        <Typography>
          Ces aides sont toutefois soumises à certaines conditions, dont la
          première est la réalisation de vos travaux par un installateur
          qualifié RGE. La complexité de l'isolation extérieure des murs,
          nécessitant la pose d'ossatures, selon la méthode choisie, pour
          permettre aux murs de respirer, est un argument en faveur de la
          nécessité de faire appel à un installateur. La difficulté est de
          préserver la continuité de l'isolant. De plus, celui-ci est à même de
          résoudre les problèmes liés notamment aux ponts thermiques,
          particulièrement si votre habitation dispose d'un balcon ou d'une
          terrasse. Enfin, il saura vous conseiller en fonction du matériau de
          vos murs (briques, béton, bois, terre crue, etc.) et de l'année de
          construction de votre logement, aspects déterminants dans le choix de
          la technique d'isolation.
        </Typography>
      </Container>
    </>
  );
}

export default MaisonIndividuelle;
