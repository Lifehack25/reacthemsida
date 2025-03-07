import React, { useEffect, useState } from 'react';
import TidslinjeSektion from '../Components/TidslinjeSektion';

const Tidslinje = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("/experience.json")
      .then(response => response.json())
      .then(data => setExperience(data))
      .catch(error => console.error("Error loading experience data:", error));
  }, []);

  return (
    <div className="timeline-container">
      <h1>Min professionella tidslinje</h1>
      <ul className="timeline-list">
        {experience.map((item, index) => (
          <TidslinjeSektion key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Tidslinje;
