# (P)React Minimal State Model

## Write a class

```js
export class Counter {
    constructor(initialCount) {
        this.count = initialCount;
    }
    increment() {
        this.count += 1;
    }
}
```

## With unit test

```js
test("increment", () => {
    const counter = new Counter(10);
    counter.increment();
    expect(counter.count).toBe(11);
});
```

## Then integrate using React hook

```js
import { useStateClass } from './lib/plux';

function YourComponent() {
    const [counter, dispatch] = useStateClass(Counter, {
        params: [1],
        // reducerHook: useReducer,
        // debug: true,
    });

    return <div>
        <p>{counter.count}</p>
        <button onClick={() => dispatch('increment')}>+1</button>
    </div>;
}
```

`useStateClass` function implemented by about **50 lines**.
