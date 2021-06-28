import React from 'react';

function Random(props) {
  const randomNumber = () => Math.floor(Math.random(props.min) * props.max + 1);
  return (
    <div className="random">
      Random value between {props.min} and {props.max} => {randomNumber()}
    </div>
  );
}

export default Random;
