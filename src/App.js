import React from 'react';
import './App.css';
import WindowDimensionProvider from './components/WindowDimensionProvider'
import Content from './components/Content'

function App() {
  return (
    <WindowDimensionProvider>
    <div className="App">
      <Content/>
    </div>
    </WindowDimensionProvider>
  );
}

export default App;
