export function useStateClass(classDefinition, options = {}) {
    options = Object.assign({
        params: [],
        reducerHook: null,
        debug: false,
    }, options);

    const reducer = (stateWrapper, action) => {
        const state = stateWrapper.payload;
        const targetMethod = state[action.type];
        if (!targetMethod) {
            if (options.debug) {
                console.error("No such action", action.type);
            }
            return stateWrapper;
        }
        const actionReturnValue = targetMethod.call(state, action.payload, stateWrapper.__dispatch);
        if (actionReturnValue === false) {
            if (options.debug) {
                console.log("Canceled");
            }
            return stateWrapper;
        }

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

        return {payload: state, __dispatch: stateWrapper.__dispatch};
    };

    const useReducer = options.reducerHook ?
        options.reducerHook :
        require("react").useReducer;

    const state = new classDefinition(...options.params);
    const [stateWrapper, dispatch] = useReducer(reducer, {payload: state});

    const __dispatch = (action, payload) => {
        if (typeof action !== 'object' || typeof action.type === 'undefined') {
            action = {type: action};
        }
        if (typeof action.payload === 'undefined') {
            action.payload = payload;
        }
        dispatch(action);
    };
    stateWrapper.__dispatch = __dispatch;

    return [stateWrapper.payload, __dispatch];
}
