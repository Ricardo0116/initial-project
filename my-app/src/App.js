import logo from './logo.svg';
import './App.css';
import './Components'
import Components from './Components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My name is Ricardo Capera and i´m learning </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Components />
      </header>
    </div>
  );
}

export default App;
