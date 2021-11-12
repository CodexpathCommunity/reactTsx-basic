import './App.css';
import BooleanInterface from './components/BooleanInterface';
import ChildrenIntereface from './components/ChildrenIntereface';
import DateInterface from './components/DateInterface';

const App = function () {
  return (
    <div className="">
      <p>this is the starter react app</p>
      <DateInterface date={new Date()} />
      <BooleanInterface text="this is a boolean" important />
      <BooleanInterface text="this is a function" important={false} />
      <ChildrenIntereface important={false}>
        <p>this is a child</p>
        <p>this is a second child</p>
      </ChildrenIntereface>
    </div>
  );
};

export default App;
