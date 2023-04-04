import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [firstSushi, setFirstSushi] = useState(0);
  const [emptyPlates, setEmptyPlate] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushiArr) => {
        const updatedSushis = sushiArr.map((sushi) => {
          return { ...sushi, eaten: false };
        });
        setSushis(updatedSushis);
      });
  }, []);

  const displayFourSushis = sushis.slice(firstSushi, firstSushi + 4);

  const handleNextFourSushis = () => {
    setFirstSushi(firstSushi + 4);
  };

  const handleEatenSushi = (eatenSushi) => {
    if (eatenSushi.price > budget) {
      return;
    }
    const eatenSushiArr = sushis.map((sushi) => {
      if (sushi.id === eatenSushi.id) {
        return { ...sushi, eaten: true };
      } else {
        return sushi;
      }
    });
    setEmptyPlate([...emptyPlates, eatenSushi]);
    setBudget(budget - eatenSushi.price);
    setSushis(eatenSushiArr);
  };

  return (
    <div className="app">
      <SushiContainer
        sushis={displayFourSushis}
        onHandleNextFourSushis={handleNextFourSushis}
        onHandleEatenSushi={handleEatenSushi}
      />
      <Table plates={emptyPlates} budget={budget} />
    </div>
  );
}

export default App;
