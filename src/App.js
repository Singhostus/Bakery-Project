import './App.css';
import { Routes, Route, } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Basket } from "./pages/Basket/Basket";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
  );
}
export default App;
