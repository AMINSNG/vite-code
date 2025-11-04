import { useState } from 'react';

const demoNames = ['Amin', 'Ali', 'Mohammad'];

const TrainingExample = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pickRandomName = () => {
    const nextIndex = Math.floor(Math.random() * demoNames.length);
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="training-example">
      <p>Active name: {demoNames[currentIndex]}</p>
      <button type="button" onClick={pickRandomName}>
        Show random name
      </button>
    </div>
  );
};

export default TrainingExample;
