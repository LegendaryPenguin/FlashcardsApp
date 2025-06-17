import { useState } from 'react';
import Flashcard from './components/Flashcard';
import { flashcards } from './data';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    const next = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(next);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Flashcards Quiz</h1>
      <p>Total cards: {flashcards.length}</p>

      <Flashcard card={flashcards[currentIndex]} />

      <button style={{ marginTop: '1rem' }} onClick={handleNext}>
        Next Card
      </button>
    </div>
  );
}

export default App;
