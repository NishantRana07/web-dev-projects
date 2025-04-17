import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { React, useState } from 'react';
import Quiz from './quiz';
import Form from './form';

const App = () => {
  const [quizTopic, setQuizTopic] = useState('');

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Form 
              quizTopic={quizTopic} 
              setQuizTopic={setQuizTopic} 
            />
          } 
        />
        <Route 
          path="/quiz" 
          element={
            <Quiz quizTopic={quizTopic} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;