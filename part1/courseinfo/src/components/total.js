import Info from "../data/info.";

const Total = () => {
  return (
    <p>Number of exercises: {Info.exercises.reduce((a, b) => a + b, 0)}</p>
  );
};

export default Total;
