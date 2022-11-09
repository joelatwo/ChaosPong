import { useEffect, useState } from "react";
import { Paddle } from "./Paddle";

export const AIPaddle = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPosition((prev) => (Math.random() > 0.5 ? prev + 2 : prev - 2));
    }, 250);
  }, [position]);

  return <Paddle style={{ top: position + "%", right: 4 }} />;
};
