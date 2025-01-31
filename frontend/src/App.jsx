import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurveyForm from "./components/SurveyForm";
import Login from "./components/Login";
import Results from "./components/Results";
import QRCodeGenerator from "./components/QRCodeGenerator";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <h1 className="text-3xl font-bold my-4">Nettsikkerhetsundersøkelse</h1>
        <Routes>
          <Route path="/" element={<SurveyForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/results" element={<Results />} />
          <Route path="/qrcode" element={<QRCodeGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
