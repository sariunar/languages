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

/*const columns = [
  { field: 'id', fieldName: '#' },
  { field: 'firstName', fieldName: 'First Name' },
  { field: 'lastName', fieldName: 'Last Name' },
  { field: 'role', fieldName: 'User\'s role' },
];

const data = [
  { id: 1, firstName: 'John', lastName: 'Doe', role: 'Admin' },
  { id: 2, firstName: 'John', lastName: 'Smith', role: 'Editor' }
];
*/

function App() {
  return (
    <div className="App">
      <Header />

      <div className="AppCollection">
        {
          collections.map((collection) =>
            <Collection name={collection.name} text={collection.text} />
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
