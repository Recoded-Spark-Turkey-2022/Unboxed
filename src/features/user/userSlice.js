import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword,signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../firebaseFile';

const initialState = {
  isLoggedIn: false,
  authObject: null,
  firestoreObject: null,
  error: '',
};

export const currentUserHandler = createAsyncThunk(
  'user/currentUserHandler',
  async (payload) => {
    try {
      const docRef = doc(db, 'patients', payload);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return JSON.stringify({ ...docSnap.data() });
      }
    } catch (error) {
      return JSON.stringify( error );
    }
  }
);

export const credentialsSigninHandler = createAsyncThunk(
  'user/credentialsSigninHandler',
  async (payload) => {
    const {navigation} = payload
    try {
      await signInWithEmailAndPassword(auth, payload.email, payload.password);
      navigation()
      return JSON.stringify({ ...auth.currentUser });
    } catch (error) {
      return JSON.stringify( error);
    }
  }
);

export const signoutHandler = createAsyncThunk(
  'user/signoutHandler',
  async () => {
    try {
      await signOut(auth)
      return JSON.stringify({...initialState})
    } catch (error) {
      return JSON.stringify( error);
  };
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    // Fetching Current User
    builder.addCase(currentUserHandler.pending, (state) => {
      state.isLoggedIn = false;
      state.error='Fetching current user in progress'
    });
    builder.addCase(currentUserHandler.fulfilled, (state, action) => {
      state.firestoreObject = JSON.parse(action.payload);
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(currentUserHandler.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.firestoreObject = null;
      state.error = action.payload.message;
    });
    // Login with credentials
    builder.addCase(credentialsSigninHandler.pending, (state) => {
      state.isLoggedIn = false;
      state.error='Login in progress'
    });
    builder.addCase(credentialsSigninHandler.fulfilled, (state, action) => {
      state.authObject = JSON.parse(action.payload);
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(credentialsSigninHandler.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload.message;
    });
    // sign out
    builder.addCase(signoutHandler.pending, (state) => {
      state.isLoggedIn = false;
      state.error='signout in progress'
    });
    builder.addCase(signoutHandler.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.firestoreObject = null;
      state.authObject= null
      state.error = '';
    });
    builder.addCase(signoutHandler.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload.message;
    });
  },
});

export default userSlice.reducer;

// export const loginState = () => (dispatch) => {
//      onAuthStateChanged(auth, (currentUser) => {
//       const currentUser = auth.currentUser
//       if (currentUser) {
//         const userInfo = doc(db, 'patients', currentUser.uid);
//         const newState = {
//           isLoggedIn: true,
//           authObject: currentUser,
//           firestoreObject: userInfo,
//         };
//         dispatch({ type: 'loggedIn', payload: newState });
//       } else {
//         dispatch({ type: 'loggedOut' });
//       }
//     });
// };

// function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'loggedIn':
//       return { ...action.payload };
//     case 'loggedOut':
//       return { ...initialState };
//     default:
//       return state;
//   }
// }
// export default userReducer;
