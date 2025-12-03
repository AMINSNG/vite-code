import CharacterSearch from "../features/character-search/CharacterSearch.jsx";
import FontSizeAdjuster from "../components/font-size/FontSizeAdjuster.jsx";
import ThemeSwitch from "../components/theme-switch/ThemeSwitch.jsx";
import "./App.css";
import { useNavigate, useParams } from "react-router";

const App = () => {
  const navigate = useNavigate();
  function routeuser() {
    navigate("theme-switch");
  }

  return (
    <div className="app">
      <header className="app__header">
        <div>
          <p className="app__badge">Toolkit Demo</p>
          <h1 className="app__title">Layout Playground</h1>
          <p className="app__subtitle">
            Small interactive widgets refactored with a clearer project
            structure.
          </p>
        </div>
        <button onClick={routeuser}>theme switch</button>
        <ThemeSwitch />
      </header>

      <main className="app__grid">
        <section aria-labelledby="character-search-title">
          <h2 id="character-search-title" className="app__section-title">
            Character Search
          </h2>
          <CharacterSearch />
        </section>

        <section aria-labelledby="font-size-adjuster-title">
          <h2 id="font-size-adjuster-title" className="app__section-title">
            Font Size Adjuster
          </h2>
          <FontSizeAdjuster defaultSize={20} step={4} />
        </section>
      </main>
    </div>
  );
};

export default App;
