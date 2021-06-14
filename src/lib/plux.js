import {useReducer} from "preact/hooks";

export function useStateClass(className) {
    const reducer = (state, action) => {
        const target = state[action.type];
        if (!target) {
            return state;
        }
        const newState = Object.assign(Object.create(state), state);
        target.call(newState, action.payload, state.__dispatch);
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, new className);

    const __dispatch = (action, payload) => {
        if (typeof action !== 'object' || typeof action.type === 'undefined') {
            action = {type: action};
        }
        if (typeof action.payload === 'undefined') {
            action.payload = payload;
        }
        dispatch(action);
    };
    state.__dispatch = __dispatch;

    return [state, __dispatch];
}
