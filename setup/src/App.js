import React, { useState, useEffect } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(data);
  });

  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            const { id, title, info } = question;
            return <SingleQuestion key={id} title={title} info={info} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
