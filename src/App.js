import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Validation from "./Components/Validation";
//import CollegeLogin from "./components/College Login/College_Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Validation" element={<Validation />} />
          <Route path="/CollegeLogin" element={<CollegeLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
