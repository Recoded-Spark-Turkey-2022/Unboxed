import React, { useEffect } from 'react';
import i18n from './translation/i18n';
import Navbar from './components/navbar/Navbar';
import Routers from './routers/Routers';
import Footer from './components/footer/Footer';
import { auth } from './firebaseFile';
import { currentUserHandler } from './features/user/userSlice';

function App() {
  useEffect(() => {
    i18n.changeLanguage('en-Us');
  }, []);
  return (
    <div data-testid="App" className="h-screen">
      <Navbar />
      <div className="mt-16">
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
