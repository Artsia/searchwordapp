
import './App.css';
import Header from './Comp/header';
import BodyComp from './Comp/BodyComp';

function App() {
  return (
    <div className="App">
     <Header BodyComp={BodyComp} />

     <BodyComp />
    </div>
  );
}

export default App;
