import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [posi, setPosi] = useState(0);
//   const [ballPosition, setBallPosi] = useState({ left: 0 });

  const buttonClickHandler = () => {
    setRenderBall(true);
  };

  const eventHandler = (event) => {
    switch (event.keyCode) {
      case 39:
        setPosi((posi) => posi + 5);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", eventHandler);
  }, []);

  const renderBallOrButton = () => {
    if (renderBall) {
      return (
        <div
          className="ball"
          style={{
            left: posi + "px",
            position: "absolute",
          }}
        ></div>
      );
    }
    return <button onClick={buttonClickHandler}>Click For One Ball</button>;
  };
  return <div className="playground">{renderBallOrButton()}</div>;
};

export default App;
