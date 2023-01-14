import { onAuthStateChanged } from 'firebase/auth';
import {  doc,getDoc } from 'firebase/firestore';
import { auth,db } from '../../firebaseFile';

const initialState = {
  isLoggedIn: false,
  authObject: null,
  firestoreObject: null,
};

export const loginState = () => (dispatch) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      const userInfo = doc(db, 'patients', currentUser.uid);
      try {
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
      } catch(error) {
        console.log(error)
    }
      const newState = {
        isLoggedIn: true,
        authObject: currentUser,
        firestoreObject: userInfo,
      };
      dispatch({ type: 'loggedIn', payload: newState });
    }
    else{
        dispatch({type: "loggedOut"})
    }
  });
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'loggedIn':
      return { ...action.payload };
    case 'loggedOut':
      return { ...initialState };
    default:
      return state;
  }
}
export default userReducer;


// import { createSlice } from "@reduxjs/toolkit"
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../../firebaseFile';

// const initialState = {
//   isLoggedIn: false,
//   authObject: null,
//   firestoreObject: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     loggedIn: (state, action) => {
//       state.isLoggedIn = action.payload.isLoggedIn;
//       state.authObject = action.payload.authObject;
//       state.firestoreObject = action.payload.firestoreObject;
//     },
//     loggedOut: (state,action) => {
//         state.isLoggedIn = action.payload.isLoggedIn;
//         state.authObject = action.payload.authObject;
//         state.firestoreObject = action.payload.firestoreObject;
//     }
//   }
// });

// export const { loggedIn, loggedOut } = userSlice.actions;

// export const loginState = () => (dispatch) => {
//   onAuthStateChanged(auth, (currentUser) => {
//     if (currentUser) {
//       // const userInfo = doc(db, 'patients', currentUser.uid);
//       const newState = {
//         isLoggedIn: true,
//         authObject: currentUser,
//         firestoreObject: null,
//       };
//       dispatch(loggedIn({ payload: newState }));
//     } else {
//       dispatch(loggedOut({ payload: initialState }));
//     }
//   });
// };

// export default userSlice.reducer;

