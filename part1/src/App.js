import "./App.css";

const Mensaje = (porps) => <h1>{porps.message}</h1>;
const YearBorn = (props) => (
  <h1>
    Tienes {2023 - props.edad} desde que naciste en {props.edad}
  </h1>
);

function App() {
  return (
    <div className="App">
      <Mensaje message="Estoy en un curso nuevo" />
      <Mensaje message="Para empezar a trabajar de una vez" />
      <Mensaje message="Y ganar dinerous " />
      <YearBorn edad="2001" />
      <YearBorn edad="1993" />
    </div>
  );
}

export default App;
