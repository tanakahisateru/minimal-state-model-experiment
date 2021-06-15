import {useReducer} from "preact/hooks";

export function useStateClass(classDefinition, options = {}) {
    options = Object.assign({
        params: [],
        debug: false,
    }, options);

    const reducer = (state, action) => {
        const target = state[action.type];
        if (!target) {
            if (options.debug) {
                console.error("No such action", action.type);
            }
            return state;
        }
        const newState = Object.assign(Object.create(state), state);
        const actionReturnValue = target.call(newState, action.payload, state.__dispatch);
        if (options.debug) {
            let info = [action.type];
            if (action.payload) {
                info.push(action.payload);
            }
            if (actionReturnValue instanceof Promise) {
                console.log("Start", ...info);
                actionReturnValue.finally(() => console.log("Finish", action.type));
            } else {
                console.log("Invoke", ...info);
            }
        }
        return newState;
    };

    const [state, dispatch] = useReducer(reducer, new classDefinition(...options.params));

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
