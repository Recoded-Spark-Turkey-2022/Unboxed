import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './components/navbar/Navbar';
import Routers from './routers/Routers';
import Footer from './components/footer/Footer';
import { auth } from './firebaseFile';
import { currentUserHandler } from './features/user/userSlice';
import i18n from './translation/i18n';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(currentUserHandler(currentUser.uid));
      }
    });
  }, []);
  const [lang, setLang] = useState('En');
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  return (
    <div data-testid="App" className="h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
