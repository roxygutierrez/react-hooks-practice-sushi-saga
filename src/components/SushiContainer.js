import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({
  sushis,
  onHandleNextFourSushis,
  onHandleEatenSushi,
}) {
  const renderOneSushi = sushis.map((sushi, index) => {
    return (
      <Sushi
        key={index}
        sushi={sushi}
        onHandleEatenSushi={onHandleEatenSushi}
      />
    );
  });

  return (
    <div className="belt">
      {renderOneSushi}
      <MoreButton onHandleNextFourSushis={onHandleNextFourSushis} />
    </div>
  );
}

export default SushiContainer;
