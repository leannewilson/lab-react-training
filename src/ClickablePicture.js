import React from 'react';

function ClickablePicture(props) {
  console.log(props);

  const sunnies = (e) => {
    return <img src={props.imgClicked} />;
    console.log(sunnies);
  };

  return (
    <button onClick={sunnies}>
      <img src={props.img} />
    </button>
  );
}

export default ClickablePicture;
