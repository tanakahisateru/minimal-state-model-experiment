import { createContext } from 'preact';

export class Counter {
	count = 0;

	increment() {
		this.count += 1;
	}
	decrement() {
		this.count -= 1;
	}
	addNumber(payload) {
		// console.debug(payload);
		this.count += payload;
	}
	incrementDelayed(payload, dispatch) {
		function delay(t) {
			return new Promise((resolve) => {
				setTimeout(resolve, t);
			});
		}
		delay(1000).then(() => {
			dispatch('increment');
		}).catch((e) => {
			console.error(e);
		});
	}
}

export const CounterContext = createContext([]);
