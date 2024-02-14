import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from './layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Layout />} />
    </Routes>
  );
}

export default App;
