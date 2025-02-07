const API_BASE_URL = 'http://localhost:5000/api';

export const submitSurveyResponse = async (answers, questions) => {
  try {
    const response = await fetch(`${API_BASE_URL}/survey/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answers,
        questions
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit survey');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting survey:', error);
    throw error;
  }
};