import React from 'react';
import Navbar from './components/navbar/Navbar';
import Routers from './routers/Routers';
// import Footer from './components/footer/Footer';

function App() {
  return (
    <div data-testid="App" className="App">
      <Navbar />
      <Routers />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
