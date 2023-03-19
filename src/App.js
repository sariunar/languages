import logo from './logo.svg';
import './App.css';
import React from 'react';
//import './assets/styles/'
import Header from './assets/components/header';
import Collection from './assets/components/collections';

let collections = [{}];
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
