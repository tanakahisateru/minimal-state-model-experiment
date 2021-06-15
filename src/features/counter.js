export class Counter {
	_count = {
		value: 0,
	};

	constructor(initialCount) {
		if (initialCount) {
			this._count.value = initialCount;
		}
	}

	get count() {
		return this._count.value;
	}

	increment() {
		this._count.value += 1;
	}
	decrement() {
		this._count.value -= 1;
	}
	addNumber(payload) {
		this._count.value += payload;
	}

	async incrementDelayed(payload, dispatch) {
		function delay(t) {
			return new Promise((resolve) => {
				setTimeout(resolve, t);
			});
		}

		// NEVER call dispatch() before the first await!
		this.increment();

		await delay(500);
		for (let i = 0; i < payload - 1; i++) {
			await delay(100);
			dispatch('increment');
		}
	}
}

import { createContext } from 'preact';
export const CounterContext = createContext([]);
