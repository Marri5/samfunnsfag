import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ error: "Ingen tilgang" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Ugyldig token" });
    req.user = user;
    next();
  });
};

export default authenticateToken;
