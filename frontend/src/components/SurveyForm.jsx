import { useState } from "react";
import { submitSurvey } from "../api";

const questions = ["Hva betyr to-faktor autentisering?", "Hvor ofte oppdaterer du passord?", "Har du opplevd ID-tyveri?", "Bruker du VPN?", "Hva gjør du ved phishing?"];

const SurveyForm = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitSurvey(answers.map((answer, i) => ({ question: questions[i], answer })));
    alert("Svar sendt!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      {questions.map((q, index) => (
        <div key={index} className="my-4">
          <p className="font-semibold">{q}</p>
          <input type="text" value={answers[index]} onChange={(e) => setAnswers(prev => { const newA = [...prev]; newA[index] = e.target.value; return newA; })} className="w-full p-2 border rounded-lg" />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send svar</button>
    </form>
  );
};

export default SurveyForm;
