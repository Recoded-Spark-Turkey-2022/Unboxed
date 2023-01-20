import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { db } from '../../firebaseFile';

const initialState = {
  error: null,
  cards: null,
  loading: false,
};
export const addCard = createAsyncThunk(
  'card/addCard',
  async (payload, { rejectWithValue }, card) => {
    const { navigation } = payload;
    try {
      const { user } = useSelector((state) => state.user);
      const cardInfo = doc(db, 'patients', user.uid);
      await updateDoc(cardInfo, {
        cards: arrayUnion(card),
      });
      navigation();
      return JSON.stringify({ ...initialState });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const cardSlice = createSlice({
  name: 'card',
  initialState,
  extraReducers: (builder) => {
    // Adding Cards
    builder.addCase(addCard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCard.fulfilled, (state, action) => {
      state.cards = JSON.parse(action.payload);
      state.loading = false;
      state.error = null;
    });
    builder.addCase(addCard.rejected, (state, action) => {
      state.cards = null;
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default cardSlice.reducer;
