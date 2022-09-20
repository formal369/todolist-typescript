import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h2>TodoList with Typescript</h2>
        <form onSubmit={() => {}}>
          <input type="text" onChange={() => {}} className="inputText" />
          <input type="submit" value="작성" className="submitButton" />
        </form>
      </div>
    </div>
  );
}

export default App;
