import { h } from 'preact';
import { useContext } from 'preact/hooks';

/** @jsx h */

import Nav from '../components/Nav';
import { CounterContext } from "../features/counter";

export default function Page2() {
    const [counter, dispatch] = useContext(CounterContext);

    return <div>
        <header>
            <Nav />
            <h1>Page2</h1>
        </header>
        <main>
            <p>Page 2</p>
    
            <h2>Self delayed</h2>
            <p>{ counter.count }</p>
            <button onClick={ () => dispatch('incrementDelayed') }>+1</button>

            <h2>Remote immediate</h2>
            <CountDisplay />
            <CountIncrementButton />
        </main>
    </div>;
};

function CountDisplay() {
    const [counter] = useContext(CounterContext);
    return <p>{ counter.count }</p>;
}

function CountIncrementButton() {
    const [,dispatch] = useContext(CounterContext);
    // return <button onClick={ () => dispatch({type: 'add', payload: 2}) }>+2</button>;
    return <button onClick={ () => dispatch('addNumber', 2) }>+2</button>;
}
