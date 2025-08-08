import "./css/App.css";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/Movie.Context";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
