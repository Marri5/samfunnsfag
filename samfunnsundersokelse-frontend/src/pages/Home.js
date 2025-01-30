import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Velkommen til undersøkelsen</h1>
      <Link to="/surveys">Gå til undersøkelsen</Link>
    </div>
  );
}

export default Home;
