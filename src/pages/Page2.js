import { h } from 'preact';
// import { useState } from 'preact/hooks';
import { useSelector, useDispatch } from 'react-redux';
import counterSlice, { incrementDelayedThunk } from '../features/counter';

/** @jsx h */

import Nav from '../components/Nav';

export default function Page2() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    // const [count, saveCount] = useState(1);

    const dispatchIncrement = () => {
        // dispatch(counterSlice.actions.increment());
        // dispatch({type: 'counter/increment'});
        dispatch(incrementDelayedThunk);
    };

    return <div>
        <header>
            <Nav />
            <h1>Page2</h1>
        </header>
        <main>
            <p>Page 2</p>
    
            <h2>Self delayed</h2>
            <p>{ count }</p>
            <button onClick={ dispatchIncrement }>+1</button>

            <h2>Remote immediate</h2>
            <CountDisplay />
            <CountIncrementButton />
        </main>
    </div>;
};

function CountDisplay() {
    const count = useSelector((state) => state.counter.value);
    return <p>{ count }</p>;
}

function CountIncrementButton() {
    const dispatch = useDispatch();
    return <button onClick={ () => dispatch({type: 'counter/increment'}) }>+1</button>;
}
