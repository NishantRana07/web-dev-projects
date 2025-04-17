import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, difficulty, questionCount: 5 }),
      });

      if (!response.ok) throw new Error('Failed to generate quiz');
      
      const quizData = await response.json();
      navigate('/quiz', { state: { quizData, topic } });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter quiz topic"
        required
      />
      
      <select 
        value={difficulty} 
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Quiz'}
      </button>
      
      {error && <p className="error">{error}</p>}
    </form>
  );
}