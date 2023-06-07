import './App.css';
import '../Collections/Collections.css'
import '../Slider/Slider.css'
import React from 'react';
import Header from '../AppHeader/Header';
import Footer from '../AppFooter/Footer';

function App() {
  /*const ThemeContext = React.createContext(defaultValue);
  <ThemeContext.Provider value={"light"}>
    <App />
  </ThemeContext.Provider>*/
  return (
    <div className="App">
      <Header />
      <div className='footerApp'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
