interface BooleanInterfaceProps {
  text: string;
  important: boolean;
}

function BooleanInterface({
  text,
  important,
}: BooleanInterfaceProps): JSX.Element {
  return (
    <div>
      {important ? (
        <h1>{text} this text is important</h1>
      ) : (
        <h2>{text} this text is not important</h2>
      )}
      <p>for important things</p>
    </div>
  );
}

export default BooleanInterface;
