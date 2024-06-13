import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/spomiklo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to my LinkedIn profile
        </a>
      </header>
    </div>
  );
}
export default App;
