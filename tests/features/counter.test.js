import {Counter} from "../../src/features/counter";

test("Initial count", () => {
    const counter = new Counter(123);
    expect(counter.count).toBe(123);
});

test("increment", () => {
    const counter = new Counter(10);
    counter.increment();
    expect(counter.count).toBe(11);
});

test("decrement", () => {
    const counter = new Counter(10);
    counter.decrement();
    expect(counter.count).toBe(9);
});

test("addNumber", () => {
    const counter = new Counter(10);
    counter.addNumber(10);
    expect(counter.count).toBe(20);
});
