import { useEffect, useState } from "react";
import { fetchResults } from "../api";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getResults = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Ingen tilgang, vennligst logg inn.");
        return;
      }
      try {
        const data = await fetchResults(token);
        setResults(data);
      } catch (err) {
        setError("Kunne ikke hente resultater.");
      }
    };

    getResults();
  }, []);

  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-red-500">{error}</p>
        <button onClick={() => navigate("/login")} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Gå til innlogging
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Undersøkelsesresultater</h2>
      {results.length === 0 ? (
        <p>Ingen svar innsendt ennå.</p>
      ) : (
        results.map((res, i) => (
          <div key={i} className="my-4 border-b pb-2">
            <h3 className="font-semibold">Svar {i + 1}:</h3>
            {res.answers.map((ans, j) => (
              <p key={j}><strong>{ans.question}:</strong> {ans.answer}</p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Results;
