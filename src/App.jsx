import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './components/navbar/Navbar';
import Routers from './routers/Routers';
import Footer from './components/footer/Footer';
import { auth } from './firebaseFile';
import { currentUserHandler } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(currentUserHandler(currentUser.uid));
      }
    });
  }, []);

  return (
    <div data-testid="App" className="App">
      <Navbar />
      <div className="mt-16">
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
