import { useEffect, useState } from "react";
import axios from "axios";

function SurveyPage() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/surveys").then((res) => {
      setSurveys(res.data);
    });
  }, []);

  const submitResponse = (surveyId, option) => {
    axios.post(`http://localhost:5000/api/surveys/${surveyId}/respond`, { option })
      .then(() => alert("Svar registrert!"));
  };

  return (
    <div>
      <h1>Undersøkelser</h1>
      {surveys.map((survey) => (
        <div key={survey._id}>
          <h2>{survey.question}</h2>
          {survey.options.map((opt) => (
            <button key={opt} onClick={() => submitResponse(survey._id, opt)}>
              {opt}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SurveyPage;
