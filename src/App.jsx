import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css"
import Home from "./pages/Home";
import Explore from './components/Explore/Explore';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ <Home />}
                    />
                <Route
                    path="/Explore"
                    element={ <Explore/>}
                    />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
