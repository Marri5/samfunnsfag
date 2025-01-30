import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SurveyPage from "./pages/SurveyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/surveys" element={<SurveyPage />} />
    </Routes>
  );
}

export default App;
