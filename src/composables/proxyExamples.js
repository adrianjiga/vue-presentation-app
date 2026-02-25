export const createBasicProxyExample = () => {
	const data = {
		value: 42,
	};

	return new Proxy(data, {
		get(target, key) {
			return Reflect.get(target, key);
		},
		set(target, key, value) {
			return Reflect.set(target, key, value);
		},
	});
};
