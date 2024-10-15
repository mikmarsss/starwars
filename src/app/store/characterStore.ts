import { configureStore } from '@reduxjs/toolkit';
import reducer from '../../features/characterSlice';

const characterStore = configureStore({
    reducer: {
        data: reducer,
    },
});

export type RootState = ReturnType<typeof characterStore.getState>;
export type AppDispatch = typeof characterStore.dispatch;

export default characterStore;