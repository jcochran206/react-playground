import React from 'react'; 
import Split from './composition/Split';
import './App.css';


function App() {
  return (
    <div className="App">
      <Split className="left" flexBasis={2}>
        left
      </Split>
      <Split className="right">
        right
      </Split>
    
    </div>
  );
}

export default App;
