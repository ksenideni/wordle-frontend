import './App.css';
import KeyBoard from './components/keyboard';
import Wordboard from './components/game/wordboard/wordboard';

function App() {
  return (
    <div className="App">
      <Wordboard></Wordboard>
      <KeyBoard></KeyBoard>
      
    </div>
  );
}

export default App;
