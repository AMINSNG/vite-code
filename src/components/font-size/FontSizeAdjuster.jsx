import { useState } from 'react';
import './FontSizeAdjuster.css';

const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 40;

const FontSizeAdjuster = ({ defaultSize = 16, step = 2 }) => {
  const [fontSize, setFontSize] = useState(defaultSize);

  const handleDecrease = () => {
    setFontSize((current) => Math.max(current - step, MIN_FONT_SIZE));
  };

  const handleIncrease = () => {
    setFontSize((current) => Math.min(current + step, MAX_FONT_SIZE));
  };

  const handleReset = () => {
    setFontSize(defaultSize);
  };

  const canDecrease = fontSize > MIN_FONT_SIZE;
  const canIncrease = fontSize < MAX_FONT_SIZE;

  return (
    <div className="font-size-adjuster">
      <header className="font-size-adjuster__header">
        <h3>Text size controller</h3>
        <p>
          Increase or decrease the preview text. Values are clamped between {MIN_FONT_SIZE}
          px and {MAX_FONT_SIZE}px.
        </p>
      </header>

      <div className="font-size-adjuster__controls">
        <div className="font-size-adjuster__buttons">
          <button type="button" onClick={handleDecrease} disabled={!canDecrease}>
            Smaller
          </button>
          <button type="button" onClick={handleIncrease} disabled={!canIncrease}>
            Larger
          </button>
          <button type="button" className="font-size-adjuster__reset" onClick={handleReset}>
            Reset
          </button>
        </div>
        <span className="font-size-adjuster__current">Size: {fontSize}px</span>
      </div>

      <p className="font-size-adjuster__preview" style={{ fontSize }}>
        This is a live preview. Adjust the size controls to see me scale.
      </p>
    </div>
  );
};

export default FontSizeAdjuster;
