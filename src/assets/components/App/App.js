import './App.css';
import React from 'react';
//import './assets/styles/'
import Header from '../AppHeader/Header';
import Footer from '../AppFooter/Footer';
import Table from '../Table/Table';
import Card from '../Card/Card';
import Collection from '../Collections/Collections';

let collections = [
  {
    "id": 1,
    "name": "The human body",
    "text": ""
  }, {
    "id": 2,
    "name": "Fruits",
    "text": ""
  }, {
    "id": 3,
    "name": "Capital cities",
    "text": ""
  }, {
    "id": 4,
    "name": "Weather",
    "text": ""
  }, {
    "id": 5,
    "name": "Animals",
    "text": ""
  }];

function App() {
  return (
    <div className="App">
      <Header />

      <div className="AppCollection">
        {
          collections.map((collection) =>
            <Collection key={collection.id} name={collection.name} text={collection.text} />
          )
        }
      </div>

      <div>
        <Table />
      </div>

      <div className='cardWord'>
        <Card />
      </div>

      <div><Footer /></div>

    </div>
  );
}

export default App;
