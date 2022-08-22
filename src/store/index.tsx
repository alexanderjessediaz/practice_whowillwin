import {configureStore} from '@reduxjs/toolkit';
import userSlice from './features/user';
// import currentGameSlice from './features/currentGameSlice';
// import currentPlayer from './features/currentPlayerSlice';
// import gamesSlice from './features/games';
// import usersSlice from './features/users';
// import playersSlice from './features/players';
// import playerSlice from './features/player';

export const store = configureStore({
  reducer: {
    user: userSlice,
    // users: usersSlice,
    // games: gamesSlice,
    // players: playersSlice,
    // player: playerSlice,
    // currentGame: currentGameSlice,
    // currentPlayer: currentPlayer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
