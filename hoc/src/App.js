import logo from './logo.svg';
import './App.css';
import Test from './component/test';
import Demo from './component/demo';

function App() {
  return (
  <>
  <h1>Hello</h1>
    <Test Component={Demo}/>
  </>
    
  );
}

export default App;
