import { createSlice } from "@reduxjs/toolkit"

export const expandSlice = createSlice({
    name: 'expand',
    initialState: {
        isExpanded: false,
    },
    reducers: {
        expandSideBar: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isExpanded = !state.isExpanded
        },
    },
})

// Action creators are generated for each case reducer function
export const selectIsExpanded = state => state.expandNavBar.isExpanded
export const { expandSideBar } = expandSlice.actions

export default expandSlice.reducer
