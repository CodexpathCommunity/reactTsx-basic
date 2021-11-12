import "./App.css";
import BooleanInterface from "./components/BooleanInterface";
import DateInterface from "./components/DateInterface";

function App() {
  return (
    <div className="App">
      <p>this is the starter react app</p>
      <DateInterface date={new Date()} />
      <BooleanInterface text="this is a boolean" important={true} />
      <BooleanInterface text="this is a function" important={false} />
    </div>
  );
}

export default App;
