import React from "react";

function CarteDeVisite({ image, role, fullname, email }) {
  return (
    <div className="carte-de-visite" style={{display: "flex", alignItems: 'center', padding: '1rem', gap: '1rem', flexWrap: 'wrap'}}>
      <img src={image} alt=""/>
      <div className="carte-infos" style={{width: '300px'}}>
        <p>{fullname}</p>
        <p>{role}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default CarteDeVisite;
