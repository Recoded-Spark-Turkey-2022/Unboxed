import React, { useEffect, useState } from 'react';

import i18n from './translation/i18n';
import Navbar from './components/navbar/Navbar';
import Routers from './routers/Routers';
import Footer from './components/footer/Footer';

function App() {
  const [lang, setLang] = useState('En');
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);
  return (
    <div data-testid="App" className="App">
      <Navbar lang={lang} setLang={setLang} />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
