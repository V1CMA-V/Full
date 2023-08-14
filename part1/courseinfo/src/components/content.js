import Info from "../data/info.";

function Content(props) {
  return Info.parts.map((part, index) => (
    <p key={index}>
      {part} {Info.exercises[index]}
    </p>
  ));
}

export default Content;
