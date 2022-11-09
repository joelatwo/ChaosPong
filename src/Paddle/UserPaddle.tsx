import { useEffect, useState } from "react";
import { Paddle } from "./Paddle";

export const UserPaddle = () => {
  const [position, setPosition] = useState(50);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setPosition(event.offsetY);
    });
  }, []);

  return (
    <div
      id="player-paddle"
      style={{
        backgroundColor: "white",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        width: 4,
        position: "absolute",
        borderRadius: 10,
        top: position,
      }}
    ></div>
  );
};
