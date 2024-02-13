"use client";

import { useState } from "react";

 const LikeButton = () => {
    let [likes, setLikes] = useState(0);

    function handleClick() {
      setLikes(likes + 1);
    }
   
    return <button onClick={handleClick}>Like ({likes})</button>;
  }

  export default LikeButton;