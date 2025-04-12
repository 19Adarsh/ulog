import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/NavBar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />

      </Routes>
    </Router>
  );
}

export default App;