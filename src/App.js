import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website uses Git Actions to deploy the application on AWS S3
        </p>
      </header>
    </div>
  );
}

export default App;
