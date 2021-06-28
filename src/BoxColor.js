import React from 'react';

function BoxColor(props) {
  //   const randomNumber = () => Math.floor(Math.random() * 250);
  //   console.log(randomNumber());
  let styles = {
    backgroundColor: `rgb(${props.r}, ${props.g},${props.b})`,
  };

  return (
    <div className="boxcolor" style={styles}>
      rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}
// style={{backgroundColor:}}
export default BoxColor;
