import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [selected, setSelected] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setSelected(!selected)}>
          {selected ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {selected && <p>{info}</p>}
    </article>
  );
};

export default Question;
