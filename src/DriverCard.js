import React from 'react';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  let styles = {
    backgroundColor: 'blue',
    color: 'white',
  };

  return (
    <div style={styles}>
      <img
        src={img}
        style={{ width: '90px', height: '90px', borderRadius: 50 }}
      />
      <div className="driverCard">
        <div>{name}</div>
        <Rating>{rating}</Rating>
        <div>
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
