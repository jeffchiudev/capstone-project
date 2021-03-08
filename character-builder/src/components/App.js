import React from 'react';
import Header from './Header';
import CharacterControl from './CharacterControl';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <CharacterControl/>
      </div>
    </React.Fragment>
  );
}

export default App;
