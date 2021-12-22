
import Navigation from "./components/Navigation";
import Routes from "./routes";

import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
