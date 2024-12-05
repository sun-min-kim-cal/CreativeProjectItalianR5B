import './App.css';
import { useState } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import MapComponent from './MapComponent';
import MapComponent1 from './MapComponent1';
import MapComponent2 from './MapComponent2';
import MapComponent3 from './MapComponent3';
import MapComponent4 from './MapComponent4';
import MapComponent5 from './MapComponent5';

function App() {
  // Variables for query to Gemini
  const [bookTitle, setBook] = useState("");
  const [numQuestions, setNum] = useState(3);
  const [additional, setAdditional] = useState("");
  const [theme, setTheme] = useState("");
  const [discussionQuestions, setQuestions] = useState([]);
  const worksID = {
    "Clash of Civilization Over an Elevator in Piazza Vittorio by Amara Lakhous" : 1,
    "In Other words by Jhumpa Lahiri" : 2,
    "Orchestra of Piazza Vittorio by Agostino Ferrente" : 3,
    "The Dance of the Oryx by Ubah Cristina Ali Farah" : 4,
    "The Bonfire of Berlin by Helga Schneider" : 5
  };
  const [id, setID] = useState(0);

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
      console.log(response);
      setQuestions(response.data['message']);
      setID(worksID[bookTitle])
    })
    .catch(function(error) {
      console.log(error);
    });
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

  // 
  const renderDiscussion = () => {
    if (discussionQuestions.length > 0) {
      return discussionQuestions.map((question, index) => (
        <div key={index} style={{ margin: '10px', padding: '10px', backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}>
          {question}
        </div>
      ))
    } else {
      return 
    }
  }

  const renderMap = () => {
    if (id !== 0) {
      if (id === 1) {
        return <MapComponent1/>
      } else if (id === 2) {
        return <MapComponent2/>
      } else if (id === 3) {
        return <MapComponent3/>
      } else if (id === 4) {
        return <MapComponent4/>
      } else if (id === 5) {
        return <MapComponent5/>
      }
      return <MapComponent/>
    } else {
      return <div></div>
    }
  }

  return (
    <div className="App">
      <div className="Main">
        <div className="Query">
          <h2>Welcome to the discussion question generator for Italian R5B!</h2>
          <h3>Enter the information below (or leave empty) to generate a discussion question!</h3>
          <div className="Input">
            <div className="Book-Title">
              <p>Work Title:</p>
              <select value={bookTitle} onChange={handleBookTitle}>
                <option value="" disabled>Select a work</option>
                <option value="Clash of Civilization Over an Elevator in Piazza Vittorio by Amara Lakhous">Clash of Civilization Over an Elevator in Piazza Vittorio by Amara Lakhous</option>
                <option value="In Other words by Jhumpa Lahiri">In Other words by Jhumpa Lahiri</option>
                <option value="Orchestra of Piazza Vittorio by Agostino Ferrente">Orchestra of Piazza Vittorio by Agostino Ferrente</option>
                <option value="The Dance of the Oryx by Ubah Cristina Ali Farah">The Dance of the Oryx by Ubah Cristina Ali Farah</option>
                <option value="The Bonfire of Berlin by Helga Schneider">The Bonfire of Berlin by Helga Schneider</option>
              </select>
            </div>
            <div className="Theme">
              <p>Theme:</p>
              <textarea cols={1} rows={2} value={theme} onChange={handleTheme}></textarea>
            </div>
            <div className="Number-of-questions">
              <p>Number of Questions:</p>
              <div>
                <input type="range" id="slider" min="0" max="6" value={numQuestions} onChange={handleNumQuestions} />
                <p>{numQuestions}</p>
              </div>
            </div>
            <div className="Additional">
              <p>Additional Notes:</p>
              <textarea cols={20} rows={4} value={additional} onChange={handleAdditional}></textarea>
            </div>
          </div>
          <button onClick={Send}>Think of some questions!!</button>
        </div>
        <div className="Output">
          <h3>Discussion Questions: </h3>
            { discussionQuestions.length > 0 ? (
              <div className="Query-Output">
                <div className="Map">
                  {renderMap()}
                </div>
                <div className="Discussion-Questions">
                  {renderDiscussion()}
                </div>
              </div>
            ) : (
              <div>Let's get discussing!!</div>
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
