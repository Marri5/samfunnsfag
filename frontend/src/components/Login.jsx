import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/results");
      } else {
        setError("Feil e-post eller passord");
      }
    } catch (err) {
      setError("Innloggingsfeil, prøv igjen.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-bold mb-4">Lærerinnlogging</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-lg my-2"
          required
        />
        <input
          type="password"
          placeholder="Passord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded-lg my-2"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-2">
          Logg inn
        </button>
      </form>
    </div>
  );
};

export default Login;
