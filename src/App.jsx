import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./Page/Home/Home"
import Contact from "./Page/Contect/Contact";
import About from "./Page/About/About";
import SignUp from "./Page/Signup&Login/SignUp";
import Login from "./Page/Signup&Login/Login";
import ForgetPassword from "./Page/Signup&Login/ForgetPassword";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="min-h-screen ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          
          
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


