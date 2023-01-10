import React from 'react';
import Navbar from './components/navbar/Navbar';
import Routers from './routers/Routers';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div data-testid="App" className="App">
      <Navbar />
      <div className='mt-16'>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
