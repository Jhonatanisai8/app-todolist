import React from 'react';
import { ListaTareas } from './components/ListaTareas';
import './App.css';

function App() {
  return (
    <main style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <ListaTareas />
    </main>
  );
}

export default App;
