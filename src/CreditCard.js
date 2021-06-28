import React from 'react';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let styles = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };
  return (
    <div>
      <ul className="creditcard" style={styles}>
        <li>{type}</li>
        <li>{number}</li>
        <li>{expirationMonth}</li>
        <li>{expirationYear}</li>
        <li>{bank}</li>
        <li>{owner}</li>
      </ul>
    </div>
  );
}

export default CreditCard;
