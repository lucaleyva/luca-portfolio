import React, { useEffect, useState } from 'react';
import './styles.css';

function Expertise() {
  const [expertiseItems, setExpertiseItems] = useState([
    { name: "Planning & Execution", color: "#3066BE" },
    { name: "Agile Processes & Technical Practices", color: "#DE1A1A" },
    { name: "Collaboration", color: "#4CB963" },
    // Add more expertise items as needed
  ]);

  useEffect(() => {
    function displayExpertiseItems() {
      return expertiseItems.map((item) => (
        <div className="expertise-item" style={{backgroundColor: item.color}}>
          <p>{item.name}</p>
        </div>
      ));
    }

    displayExpertiseItems();
  }, [expertiseItems]);

  return (
    <section id="expertise" role="contentinfo" aria-label="Expertise">
      <h2>Expertise</h2>
      <div className="expertise-container" id="expertiseContainer" role="list" aria-label="List of Expertise">
        {expertiseItems.map((item) => (
          <div className="expertise-item" style={{backgroundColor: item.color}} role="listitem" aria-label={item.name}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;