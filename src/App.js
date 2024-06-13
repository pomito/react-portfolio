import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.react.spomiklo.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to react.spomiklo.dev
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/spomiklo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to my LinkedIn profile
        </a>
        <a
          className="App-link"
          href="https://https://github.com/pomito"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to my GitHub profile
        </a>
      </header>
    </div>
  );
}
export default App;
