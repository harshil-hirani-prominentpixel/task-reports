import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Header />
      <nav className='navbar navbar-expand-lg navbar-light bg-light px-3'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <Link to='/register' className='nav-link'>
              Register
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-link'>
              Login
            </Link>
          </li>
        </ul>
      </nav>

      <div className='container my-4'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
