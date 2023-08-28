import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionWrapper from "./hoc/SectionWrapper";
import HomePage from "./Home/HomePage";
import { MyLibrary } from "./pages/myLibrary";
import { Navbar } from "./components/Navbar";
import BottomBar from "./components/BottomNav";
import { Discover } from "./pages/discover";
import { Albulms } from "./pages/albums";
function App() {
  return (
    <>
      <div>
        <div className="w-full relative">
          <Router>
            <Navbar />

            <div className="App">
              <div className="content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/discover" element={<Discover />} />
                  <Route path="/album" element={<Albulms />} />
                  <Route path="/myLibrary" element={<MyLibrary />} />
                </Routes>
              </div>
            </div>
            <BottomBar />
          </Router>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(App, "");
