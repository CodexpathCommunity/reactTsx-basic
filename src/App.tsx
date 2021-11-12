import "./App.css";
import DateInterface from "./components/DateInterface";

function App() {
  return (
    <div className="App">
      <p>this is the starter react app</p>
      <DateInterface date={new Date()} />
    </div>
  );
}

export default App;
