import React from "react";

function Sushi({ sushi, onHandleEatenSushi }) {
  const { name, img_url, price, eaten } = sushi;

  const handleEatenSushiClick = () => {
    if (!eaten) {
      onHandleEatenSushi(sushi);
    }
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatenSushiClick}>
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
