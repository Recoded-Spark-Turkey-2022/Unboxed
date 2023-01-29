import React, { useEffect } from 'react';
import i18n from './translation/i18n';
import Navbar from './components/navbar/Navbar';
import Routers from './routers/Routers';
import Footer from './components/footer/Footer';

function App() {
  useEffect(() => {
    i18n.changeLanguage('en-Us');
  }, []);
  return (
    <div data-testid="App" className="App">
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
