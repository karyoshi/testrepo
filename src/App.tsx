import "./App.css";
import NavbarComp from "./components/Navbar/NavbarComp";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Kontakte from "./pages/Kontakte";
import Spieler from "./pages/Spieler";
import MannschaftenPage from "./pages/MannschaftenPage";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div>
      <NavbarComp />
      <div
        style={{
          position: "relative", // or "absolute" / "fixed" depending on your layout
          zIndex: "0",
          width: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/testrepo/Mannschaften" element={<MannschaftenPage />} />
          <Route path="/testrepo/Kontakte" element={<Kontakte />} />
          <Route path="/testrepo/Spieler" element={<Spieler />} />
        </Routes>
      </div>
      <div className="relative w-full mt-[navbar-height]">
        <Slider />
      </div>
      <div
        style={{
          bottom: 0,
          width: "100%",
          padding: "1px",
          backgroundColor: "blue",
          height: "200px",
        }}
      >
        <p style={{ color: "white", margin: "auto" }}>Franz Kaiser</p>
      </div>
    </div>
  );
}

export default App;
