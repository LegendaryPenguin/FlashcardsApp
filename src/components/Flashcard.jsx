import { useState } from 'react';
// import './Flashcard.css';  <-- leave this out for now

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        width: '300px',
        height: '150px',
        margin: '1rem auto',
        padding: '1rem',
        border: '1px solid black',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        backgroundColor: '#f9f9f9',
        cursor: 'pointer',
      }}
      onClick={() => setFlipped(!flipped)}
    >
      {flipped ? card.answer : card.question}
    </div>
  );
}

export default Flashcard;
