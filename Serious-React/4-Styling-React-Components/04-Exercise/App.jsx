import React from 'react';

function App() {
    
  const [headColor, setHeadColor] = React.useState();
  
  function handleColorChangeYes() {
      setHeadColor('highlight-green');
  }
  
  function handleColorChangeNo() {
      setHeadColor('highlight-red');
  }
    
  return (
    <div id="app">
      <h1 className={`${headColor === 'highlight-green' ? 'highlight-green' : ''}${headColor === 'highlight-red' ? 'highlight-red' : ''}`}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={handleColorChangeYes}>Yes</button>
        </li>
        <li>
          <button onClick={handleColorChangeNo}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
