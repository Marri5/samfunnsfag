const surveyValidation = (req, res, next) => {
    const { answers } = req.body;
    
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ message: 'Invalid survey response format' });
    }
  
    next();
  };
  
  const authValidation = (req, res, next) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password required' });
    }
  
    next();
  };
  
  module.exports = { surveyValidation, authValidation };