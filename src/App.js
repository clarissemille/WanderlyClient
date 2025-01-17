import React from "react";
import ReactDOM from "react-dom";import './App.css';
import Wanderly from './pages/Wanderly';
import Routes  from './components/Routes/index';


function App() {
  return (
    <React.StrictMode>

      <Wanderly />
      {/* <Routes /> */}
    </React.StrictMode>

  );
}

export default App;
