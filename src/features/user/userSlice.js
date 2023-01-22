import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../../firebaseFile';

const initialState = {
  isLoggedIn: false,
  authObject: null,
  firestoreObject: null,
  error: '',
};

export const currentUserHandler = createAsyncThunk(
  'user/currentUserHandler',
  // eslint-disable-next-line consistent-return
  async (payload) => {
    try {
      const docRef = doc(db, 'patients', payload);
      const docSnap = await getDoc(docRef);
      const docRef2 = doc(db, 'counselors', payload);
      const docSnap2 = await getDoc(docRef2);
      if (docSnap.exists()) {
        return JSON.stringify({ ...docSnap.data() });
      }
      if (docSnap2.exists()) {
        return JSON.stringify({ ...docSnap2.data() });
      }
    } catch (error) {
      return JSON.stringify(error);
    }
  }
);

export const credentialsSigninHandler = createAsyncThunk(
  'user/credentialsSigninHandler',
  async (payload, { rejectWithValue }) => {
    const { navigation } = payload;
    try {
      await signInWithEmailAndPassword(auth, payload.email, payload.password);
      navigation();
      return JSON.stringify({ ...auth.currentUser });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const counselorsSignupHandler = createAsyncThunk(
  'user/counselorsSignupHandler',
  async (payload, { rejectWithValue }) => {
    try {
      const { name, city, email, password, license, navigation } = payload;
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigation();
      await setDoc(doc(db, 'counselors', user.uid), {
        name,
        city,
        email,
        password,
        license,
      });
      return JSON.stringify({ ...auth.currentUser });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const credentialsSignupHandler = createAsyncThunk(
  'user/credentialsSignupHandler',
  async (payload, { rejectWithValue }) => {
    try {
      const { name, surname, email, password, birthday, navigation } = payload;
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigation();
      await setDoc(doc(db, 'patients', user.uid), {
        name,
        surname,
        email,
        password,
        birthday,
      });
      return JSON.stringify({ ...auth.currentUser });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const facebookSignupHandler = createAsyncThunk(
  'user/facebookSignupHandler',
  async (payload, { rejectWithValue }) => {
    const facebookProvider = new FacebookAuthProvider();
    const { navigation } = payload;
    try {
      const { user } = await signInWithPopup(auth, facebookProvider);
      await setDoc(doc(db, 'patients', user.uid), {
        name: user.displayName.split(' ')[0],
        surname: user.displayName.split(' ')[1],
        email: user.email,
      });
      navigation();
      return JSON.stringify({ ...auth.currentUser });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const googleSignupHandler = createAsyncThunk(
  'user/googleSignupHandler',
  async (payload, { rejectWithValue }) => {
    const googleProvider = new GoogleAuthProvider();
    const { navigation } = payload;
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      await setDoc(doc(db, 'patients', user.uid), {
        name: user.displayName.split(' ')[0],
        surname: user.displayName.split(' ')[1],
        email: user.email,
      });
      navigation();
      return JSON.stringify({ ...auth.currentUser });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signoutHandler = createAsyncThunk(
  'user/signoutHandler',
  async (payload) => {
    const { navigation } = payload;
    try {
      await signOut(auth);
      navigation();
      return JSON.stringify({ ...initialState });
    } catch (error) {
      return JSON.stringify(error);
    }
  }
);

export const editProfileHandler = createAsyncThunk(
  'user/editProfileHandler',
  async (payload, { rejectWithValue }) => {
    const {
      navigation,
      name,
      surname,
      educationLevel,
      hobbies,
      familySize,
      gender,
      birthday,
      email,
      phone,
      ID,
      password,
    } = payload;
    try {
      await signInWithEmailAndPassword(auth, auth.currentUser.email, password);
      await updateEmail(auth.currentUser, email);
      await updatePassword(auth.currentUser, password);
      const myId = auth.currentUser.uid;
      const profileInfo = doc(db, 'patients', myId);
      await updateDoc(profileInfo, {
        name,
        surname,
        educationLevel,
        hobbies,
        familySize,
        gender,
        birthday,
        email,
        phone,
        ID,
        password
      });
      navigation();
      return JSON.stringify({ ...auth.currentUser });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    // Fetching Current User
    builder.addCase(currentUserHandler.pending, (state) => {
      state.isLoggedIn = false;
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
      state.error = 'signout in progress';
    });
    builder.addCase(signoutHandler.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.firestoreObject = null;
      state.authObject = null;
      state.error = '';
    });
    builder.addCase(signoutHandler.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload.message;
    });
    // Credential signup
    builder.addCase(credentialsSignupHandler.pending, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(credentialsSignupHandler.fulfilled, (state, action) => {
      state.authObject = JSON.parse(action.payload);
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(credentialsSignupHandler.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload.message;
    });
    // Google signup
    builder.addCase(googleSignupHandler.pending, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(googleSignupHandler.fulfilled, (state, action) => {
      state.authObject = JSON.parse(action.payload);
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(googleSignupHandler.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload.message;
    });
    // Facebook Signup
    builder.addCase(facebookSignupHandler.pending, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(facebookSignupHandler.fulfilled, (state, action) => {
      state.authObject = JSON.parse(action.payload);
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(facebookSignupHandler.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload.message;
    });
    // Counselor Signup
    builder.addCase(counselorsSignupHandler.pending, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(counselorsSignupHandler.fulfilled, (state, action) => {
      state.authObject = JSON.parse(action.payload);
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(counselorsSignupHandler.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload.message;
    });
    // Patient Edit Profile
    builder.addCase(editProfileHandler.pending, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(editProfileHandler.fulfilled, (state, action) => {
      state.authObject = JSON.parse(action.payload);
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(editProfileHandler.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload.message;
    });
  },
});

export default userSlice.reducer;
