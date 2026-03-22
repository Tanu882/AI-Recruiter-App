import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProfileBuilder from "./pages/ProfileBuilder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/builder" element={<ProfileBuilder />} />++
    </Routes>
  );
}

export default App;