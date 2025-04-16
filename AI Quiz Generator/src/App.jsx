import './App.css'
import {useNavigate,} from 'react-router-dom';
const App = ()=>
{
  const Navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/quiz');
  };
  return(
    <>
    <div className="full-app">
      <form onSubmit={handleSubmit} className="form">
        <label>Enter topic for quiz</label>
        <input type="text" placeholder="Enter Text Here..."/>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export  default App;