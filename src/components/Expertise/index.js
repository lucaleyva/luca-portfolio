import React, { useEffect, useState } from 'react';
import styles from './styles.css';

function Expertise() {
  const [expertiseItems, setExpertiseItems] = useState([
    { name: "Planning & Execution", color: "#3066BE" },
    { name: "Agile Processes & Technical Practices", color: "#DE1A1A" },
    { name: "Collaboration", color: "#4CB963" },
    // Add more expertise items as needed
  ]);

  useEffect(() => {
    // Function to display expertise items
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
    <section id="expertise">
      <h2>Expertise</h2>
      <div className="expertise-container" id="expertiseContainer">
        {expertiseItems.map((item) => (
          <div className="expertise-item" style={{backgroundColor: item.color}}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;