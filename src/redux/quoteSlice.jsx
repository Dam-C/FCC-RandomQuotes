import { configureStore, createSlice } from "@reduxjs/toolkit";
import db from "../db.json";

const possibleQuotes = db.length;
const randomIndex = Math.floor(Math.random() * possibleQuotes);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: db[randomIndex].quote,
    by: db[randomIndex].by,
    from: db[randomIndex].from,
    year: db[randomIndex].year,
  },
  reducers: {
    changeQuote: (state) => {
      const possibleQuotes = db.length;
      const randomIndex = Math.floor(Math.random() * possibleQuotes);

      (state.quote = db[randomIndex].quote),
        (state.by = db[randomIndex].by),
        (state.from = db[randomIndex].from),
        (state.year = db[randomIndex].year);
    },
  },
});

export const store = configureStore({
  reducer: {
    quote: quoteSlice.reducer,
  },
});

export default store;
