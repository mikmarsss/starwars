
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CharacterModel } from '../app/models/CharacterModel';
import CharacterService from '../app/service/characterService';
import axios from 'axios';

interface CharacterState {
    items: CharacterModel[];
    error: string | null;
}

const initialState: CharacterState = {
    items: [],
    error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await CharacterService.fetchCharacters();
    return response.data.results
});

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default characterSlice.reducer;