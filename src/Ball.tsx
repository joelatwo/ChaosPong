import { useEffect, useState } from "react";

type BallType = {
  x: number;
  y: number;
  xDirection: number;
  yDirection: number;
};

export const Ball = ({ addNewBall, BallHitLeftSide, id }: any) => {
  const [position, setPosition] = useState<BallType>({
    x: 50,
    y: 50,
    xDirection: Math.random() > 0.5 ? Math.random() : Math.random() * -1,
    yDirection: Math.random() > 0.5 ? Math.random() : Math.random() * -1,
  });

  const updatePosition = () => {
    setPosition((prev) => {
      const newBallLocation = {
        x: prev.x + prev.xDirection,
        y: prev.y + prev.yDirection,
        xDirection: prev.xDirection,
        yDirection: prev.yDirection,
      };

      if (newBallLocation.x >= 100) {
        BallHitLeftSide(newBallLocation, id);
        newBallLocation.x = 99;
        newBallLocation.xDirection =
          newBallLocation.xDirection * -1 + Math.random() * 0.25;
      } else if (newBallLocation.x <= 0) {
        BallHitLeftSide(newBallLocation, id);
        newBallLocation.x = 1;
        newBallLocation.xDirection =
          newBallLocation.xDirection * -1 + Math.random() * 0.15;
      } else {
        if (Math.random() > 0.1) {
          if (
            newBallLocation.xDirection > 0 &&
            newBallLocation.xDirection < 7.5
          ) {
            newBallLocation.xDirection += Math.random();
          }
          if (
            newBallLocation.xDirection < 0 &&
            newBallLocation.xDirection > -7.5
          ) {
            newBallLocation.xDirection -= Math.random();
          }
        }
      }

      if (newBallLocation.y >= 100) {
        newBallLocation.y = 99;
        newBallLocation.yDirection = newBallLocation.yDirection * -1;
      } else if (newBallLocation.y <= 0) {
        newBallLocation.y = 1;
        newBallLocation.yDirection = newBallLocation.yDirection * -1;
      } else {
        if (Math.random() > 0.05) {
          if (
            newBallLocation.yDirection > 0 &&
            newBallLocation.yDirection < 7.5
          ) {
            newBallLocation.yDirection += Math.random();
          }
          if (
            newBallLocation.yDirection < 0 &&
            newBallLocation.yDirection > -7.5
          ) {
            newBallLocation.yDirection -= Math.random();
          }
        }
      }

      return newBallLocation;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      updatePosition();
    }, 100);
  }, [position]);
  useEffect(() => {
    updatePosition();
  }, []);

  return (
    <div
      id={`ball:${id}`}
      style={{
        padding: 8,
        borderRadius: 5,
        position: "absolute",
        backgroundColor: "white",
        top: position.y + "%",
        left: position.x + "%",
      }}
    ></div>
  );
};
