import logo from './logo.svg';
import './App.css';
import React from 'react';
//import './assets/styles/'
import Header from './assets/components/header';
import Collection from './assets/components/collections';

let collections = [
  {
    "name": "The human body",
    "text": ""
  }, {
    "name": "Fruits",
    "text": ""
  }, {
    "name": "Capital cities",
    "text": ""
  }, {
    "name": "Weather",
    "text": ""
  }, {
    "name": "Animals",
    "text": ""
  }];
function App() {
  return (
    <div className="App">
      <Header />

      <div className="App">
        {
          collections.map((collection) =>
            <Collection name={collection.name} text={collection.text} />
          )
        }
      </div>
    </div>
  );
}

export default App;
