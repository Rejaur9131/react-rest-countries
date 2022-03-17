import React from 'react';
import './Country.css';

const Country = (props) => {
  //   const {
  //     name: { common },
  //     area,
  //     population,
  //     region
  //   } = props.country;
  const { name, area, population, region, flags } = props.country;
  return (
    <div className="country">
      <h3>Country Name: {name.common}</h3>
      <img src={flags.png} alt="" width={'250px'} height={'150px'} />
      <p>Population: {population}</p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>
        <small>Region: {region}</small>
      </p>
    </div>
  );
};

export default Country;
