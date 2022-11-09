// type IProps = {
//   style;
// };

export const Paddle = ({ style }: any) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        width: 4,
        position: "absolute",
        borderRadius: 10,
        ...style,
      }}
    ></div>
  );
};
