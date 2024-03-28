import React, { useState } from "react";
import Arrow from "../../pictures/arrow_down.png";

const Accordion = ({ title, url }) => {
  const [isActive, setIsActive] = useState(false);
 
  const handleClick = () => {
     setIsActive(!isActive);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={handleClick}>
        <div className="dropdownTitle">{title}</div>
          <img
            src={Arrow}
            alt="Fléche pour afficher le description"
            className={isActive ? "rotated" : "arrow"}
          />
      </div>
      <div className={isActive ? "accordion-content-active" : "accordion-content"}>
        {url}
      </div>
    </div>
  );
};

export default Accordion;
