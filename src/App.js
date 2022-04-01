import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';

// 
function App() {
  return (
    <div>
 
      <Nav></Nav>
      <main>
      {/* <Projects></Projects> */}
        <Header></Header>
      </main>
    </div>
  );
}

export default App;
