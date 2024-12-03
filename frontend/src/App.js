import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {

  // Variables for query to Gemini
  const [bookTitle, setBook] = useState("");
  const [numQuestions, setNum] = useState(3);
  const [additional, setAdditional] = useState("")
  const [theme, setTheme] = useState("")
  const [discussionQuestions, setQuestions] = useState([]);
  
  // Sends bookTitle, numQuestions, and additional variables to backend and receives array of questions
  function Send() {
    console.log(bookTitle, numQuestions, additional);
    axios.post('http://127.0.0.1:5050/query', {
      book_title: bookTitle,
      theme: theme,
      number_questions: numQuestions,
      input_additional: additional,
    })
    .then(function(response) {
      console.log(response)
      setQuestions(response.data['message']);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  // Handles changes in bookTitle, numQuestions, and additional variables
  function handleBookTitle(event) {
    setBook(event.target.value);
  }
  function handleNumQuestions(event) {
    setNum(event.target.value);
  }
  function handleAdditional(event) {
    setAdditional(event.target.value);
  }
  function handleTheme(event) {
    setTheme(event.target.value);
  }

  // Page is all situated inside Main
    // Main contains Query and Questions
      // Query is divided into header, Input, button to send, and another header for gift
      // Questions contains newly generated questions
  return (
    <div className="App">
      <div className="Main">
        <div className="Query">
          <h2>Welcome to the discussion question generator for Italian R5B!</h2>
          <h3>Enter the information below &#40;or leave empty&#41; to generate an discussion question!</h3>
          <div className="Input">
            <div className="Book-Title">
              <p1>Work Title:</p1>
              <select value={bookTitle} onChange={handleBookTitle}>
                <option value="" disabled>
                  Select a work
                </option>
                <option value="Clash of Civilization Over an Elevator in Piazza Vittorio by Amara Lakhous">Clash of Civilization Over an Elevator in Piazza Vittorio by Amara Lakhous</option>
                <option value="In Other words by Jhumpa Lahiri">In Other words by Jhumpa Lahiri</option>
                <option value="Orchestra of Piazza Vittorio by Agostino Ferrente">Orchestra of Piazza Vittorio by Agostino Ferrente</option>
                <option value="The Dance of the Oryx by Ubah Cristina Ali Farah">The Dance of the Oryx by Ubah Cristina Ali Farah</option>
                <option value="The Bonfire of Berlin by Helga Schneider">The Bonfire of Berlin by Helga Schneider</option>
              </select>
            </div>
            <div className="Theme">
              <p1>Theme:</p1>
              <textarea
                cols = {1}
                rows = {2}
                value = {theme}
                onChange = {handleTheme}
              ></textarea>
            </div>
            <div className="Number-of-questions">
              <p1>Number of Questions:</p1>
              <div>
                <input
                  type="range"
                  id="slider"
                  min="0"
                  max="6"
                  value={numQuestions}
                  onChange={handleNumQuestions}
                />
              <p>{numQuestions}</p>
              </div>
            </div>
            <div className="Additional">
              <p1>Additional Notes:</p1>
              <textarea
                cols = {20}
                rows = {4}
                value = {additional}
                onChange = {handleAdditional}
              ></textarea>
            </div>
          </div>
          <button
            onClick = {Send}
          >Think of some questions!!</button>
        </div>
        <div className="Discussion-Questions">
            <h3>Discussion Questions: </h3>
            {discussionQuestions.length > 0 ? (
              discussionQuestions.map((question, index) => (
                <div 
                  key={index} 
                  style={{ margin: '10px', padding: '10px', backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}
                >
                  {question}
                </div>
              ))
            ) : (
              <div>Lets get discussing!!</div>
            )}
          </div>
      </div>
    </div>
  );
}

export default App;
