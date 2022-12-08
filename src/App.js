import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import NavBar from "./pages/header/NavBar";
import Home from "./pages/home/Home";
import PortfolioDetails from "./pages/portfolioDetails/PortfolioDetails";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio-details/:portfolioDetailsId" element={<PortfolioDetails />} />
                <Route path="/all-blogs" element={<Blogs />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
