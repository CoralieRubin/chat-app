import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/thumb/men/75.jpg"
        name="Brad Gibson"
        online
      />

      <Contact
        avatar="https://randomuser.me/api/portraits/thumb/men/74.jpg"
        name="Hazel Morris"
      />

      <Contact
        avatar="https://randomuser.me/api/portraits/thumb/men/53.jpg"
        name="Sean Freeman"
        online
      />
    </div>
  );
}

export default App;
