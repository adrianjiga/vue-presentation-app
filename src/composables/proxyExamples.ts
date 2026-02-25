interface ProxyData {
	value: number;
}

export const createBasicProxyExample = (): ProxyData => {
	const data: ProxyData = {
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
