import React, { useEffect, useState } from "react";
import "./square.css";

const AnimationPage = () => {
  const [activeSquares, setActiveSquares] = useState([]);
  const [gridBackgroundColor, setGridBackgroundColor] = useState("#000");
  const [squareFillColor, setSquareFillColor] = useState("#FFF");

  useEffect(() => {
    const createSquares = () => {
      const generatedSquares = [];
      const columnsToUse = Array.from({ length: 20 }, (_, i) => i) 
        .sort(() => Math.random() - 0.5) 
        .slice(0, 5); 

      for (const col of columnsToUse) {
        const squareCount = Math.floor(Math.random() * 10) + 5; 
        for (let i = 0; i < squareCount; i++) {
          generatedSquares.push({
            id: `${col}-${i}-${Math.random()}`, 
            animationDelay: Math.random(), 
            position: {
              x: col, 
              y: 0, 
            },
          });
        }
      }

      setActiveSquares(generatedSquares);
      setSquareFillColor(pickRandomColor()); 
      setGridBackgroundColor(pickRandomColor()); 
    };

    createSquares();

    const intervalId = setInterval(() => {
      createSquares();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const pickRandomColor = () => {
    const colorPalette = ["#427a92", "#704292", "#ba4a93", "#df9c2a", "#2adf33", "#2ac7df"];
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
  };

  return (
    <div className="grid-container" style={{ backgroundColor: gridBackgroundColor }}>
      {[...Array(15)].map((_, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {[...Array(20)].map((_, colIndex) => (
            <div key={colIndex} className="grid-square"></div>
          ))}
        </div>
      ))}

      {activeSquares.map((square) => (
        <div
          key={square.id}
          className="square"
          style={{
            backgroundColor: squareFillColor,
            animationDelay: `${square.animationDelay}s`,
            gridColumn: square.position.x + 1,
            gridRow: square.position.y + 1,
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimationPage;

