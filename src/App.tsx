import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserPaddle } from "./Paddle/UserPaddle";
import { AIPaddle } from "./Paddle/AIPaddle";
import { Ball } from "./Ball";

function App() {
  const [currentBallIndex, setCurrentBallIndex] = useState(1);
  const [ballList, setBallList] = useState<number[]>([0]);
  const BallHitLeftSide = (newBallLocation: any, key: number) => {
    // // Hit AI Paddle
    if (newBallLocation.x >= 100) {
      addNewBall();
      return;
    } else if (newBallLocation.x <= 0) {
      const board = document.getElementById("board")?.clientHeight || 0;
      const paddle = document.getElementById("player-paddle");
      const ball = parseInt(
        document.getElementById(`ball:${key}`)?.style.top || "0"
      );
      const top = (parseInt(paddle?.style.top || "0") / board) * 100 - 5;
      const bottom = top + 25;
      if (top < ball && ball < bottom) {
        addNewBall();
        return;
      }
    }

    removeBall(key);
    return;
  };

  const removeBall = (key: number) => {
    const newBallList = [...ballList];

    setBallList(newBallList.filter((ball) => ball !== key));
  };

  const addNewBall = () => {
    const newBallList = [...ballList];
    if (newBallList.length < 15) {
      newBallList.push(currentBallIndex);
      setCurrentBallIndex((prev) => prev + 1);
      setBallList(newBallList);
    }
  };

  useEffect(() => {
    if (ballList.length === 0) {
      addNewBall();
    }
  }, [ballList]);

  return (
    <div style={{ padding: "9vh 9vw" }}>
      <div>You've got {ballList.length} Balls flying!!!</div>
      <div
        id="board"
        style={{
          position: "relative",
          padding: 16,
          width: "80vw",
          height: "80vh",
          backgroundColor: "black",
        }}
      >
        <UserPaddle></UserPaddle>
        {ballList.map((ball: any) => (
          <Ball
            key={ball}
            BallHitLeftSide={BallHitLeftSide}
            addNewBall={addNewBall}
            startingPosition={ball}
            id={ball}
          ></Ball>
        ))}
        {/* <Ball checkPaddleCollision={checkPaddleCollision}></Ball> */}
        {/* <AIPaddle></AIPaddle> */}
      </div>
    </div>
  );
}

export default App;
