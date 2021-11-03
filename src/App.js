import React from 'react';
import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div id="container">
      <Header id="header"/>
      <Body id="body"/>
      <Footer id="footer"/>
    </div>
  );
}

export default App;
