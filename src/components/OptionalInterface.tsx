interface OptionalInterfaceProps {
  children: JSX.Element | JSX.Element[] | string | number;
  boolean?: boolean;
}

function OptionalInterface({ children, boolean }: OptionalInterfaceProps) {
  return (
    <div>
      <p></p>
    </div>
  );
}

export default OptionalInterface;
