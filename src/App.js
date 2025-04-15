import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/LifeStyle/HomePage";
import LoginPage from "./Components/LoginPage";
import ProductList from "./Pages/LifeStyle/ProductList";
import Cart from "./Pages/LifeStyle/Cart";
import CartPage from "./Pages/LifeStyle/CartPage";
import { CartProvider } from './Pages/CartContext';
import SelectionPage from "./Components/SelectionPage";
import EducationNavBar from "./Components/EducationNavBar";
import LifestyleNavBar from "./Components/LifeStyleNavBar";
import Category from "./Pages/Education/Category";
import Home from "./Pages/Education/Home";
import ProfileEducation from "./Pages/Education/ProfileEducation";
import Profile from "./Pages/LifeStyle/ProfilePage";

const Layout = ({ children }) => {
  const userCategory = localStorage.getItem("userCategory");

  return (
    <>
      {userCategory === "education" ? <EducationNavBar /> : <LifestyleNavBar />}
      {children}
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Step 1: Login Page */}
          <Route path="/" element={<LoginPage />} />

          {/* Step 2: Selection Page */}
          <Route path="/select" element={<SelectionPage />} />

          {/* Step 3: Lifestyle Routes */}
          <Route path="/homli" element={<Layout><HomePage /></Layout>} />
          <Route path="/product" element={<Layout><ProductList /></Layout>} />
          <Route path="/cart" element={<Layout><Cart /></Layout>} />
          <Route path="/cartPage" element={<Layout><CartPage /></Layout>} />
          <Route path="/profilife" element={<Layout><Profile /></Layout>} />

          {/* Step 4: Education Routes */}
          <Route path="/homedu" element={<Layout><Home /></Layout>} />
          <Route path="/category" element={<Layout><Category /></Layout>} />
          <Route path="/profiledu" element={<Layout><ProfileEducation /></Layout>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
