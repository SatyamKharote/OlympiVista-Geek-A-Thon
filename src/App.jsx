import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import Explore from './components/Explore/Explore';
import Explore from "./pages/Explore";
import Athlete from "./Contexts/Athlete";
import Developer from "./pages/Developer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Athlete>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Developer" element={<Developer />} />
          </Routes>
        </Athlete>
      </BrowserRouter>
    </div>
  );
}

export default App;
