import { createSlice } from "@reduxjs/toolkit";

export const toggleMessageSlice = createSlice({
    name: 'toggleMessages',
    initialState: {
        messages: [{text: 'helllo'}, {text: 'hello again'} ]
    },
    reducers: {
        addMessage: (state, action) => {
            const { id, text } = action.payload;
            state.messages = {
                id: id,
                text: text
            }
        }
    }
});

// selector
export const selectMessages = state => state.messages;
// reducer
export default toggleMessageSlice.reducer;
// action creator
export const { addMessage } = toggleMessageSlice.actions;