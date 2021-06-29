import React, { useState } from 'react';

function LikeButton() {
  let [like, setLike] = useState(0);

  const likes = () => {
    like++;
    setLike(like);
  };

  return (
    <div>
      <button onClick={likes}>{like} Likes</button>
    </div>
  );
}

export default LikeButton;
