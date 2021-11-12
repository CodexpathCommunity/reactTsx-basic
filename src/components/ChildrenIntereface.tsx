interface ChildrenInterfaceProps {
  children: JSX.Element | JSX.Element[];
  important: boolean;
}

function ChildrenIntereface({ children, important }: ChildrenInterfaceProps) {
  return (
    <div>
      <p>{important ? "this is important" : "this is not important"}</p>
      {children}
    </div>
  );
}

export default ChildrenIntereface;
