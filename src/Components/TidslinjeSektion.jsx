import React from 'react';

const TidslinjeSektion = ({ item }) => {
  return (
    <li style={{ "--accent-color": item.accentColor }}>
      <div className="date">{item.year}</div>
      <h3 className="title"><b>{item.title}</b></h3>
      <div className="descr">{item.description}</div>
    </li>
  );
};

export default TidslinjeSektion;
