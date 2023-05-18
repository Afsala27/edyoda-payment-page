import Navbar from './Components/Navbar'
import './App.css';
import Content from './Components/Content';
import Payment from './Components/Payment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content /> <Payment />
    </div>
  );
}

export default App;
