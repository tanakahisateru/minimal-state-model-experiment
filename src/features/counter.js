import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	},
	reducers: {
		increment(state) {
			state.value += 1;
	    },
	    decrement(state) {
			state.value -= 1;
	    },
	},	
});

function delay(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t);
    });
}

export async function incrementDelayedThunk(dispatch, getState) {
    await delay(2000);
    dispatch({ type: 'counter/increment' });
};
