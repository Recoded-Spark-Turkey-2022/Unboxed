import React from 'react';
import Navbar from './components/navbar/Navbar';
import Routers from './routers/Routers';
import Footer from './components/footer/Footer';
import Counsler from './components/Counsler/Counsler';

function App() {
  return (
    <div data-testid="App" className="App">
      <Navbar />
      <Counsler />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
