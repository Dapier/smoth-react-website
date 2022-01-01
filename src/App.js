import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home  from "./pages";
import SignInCard from './pages/signIn'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignInCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
