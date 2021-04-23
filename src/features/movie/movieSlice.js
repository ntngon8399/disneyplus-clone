const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
  },
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

const { actions, reducer } = movieSlice;
export const { setMovies } = actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default reducer;
