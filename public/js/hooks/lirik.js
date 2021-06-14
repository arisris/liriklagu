import { useState, useEffect } from "preact/hooks";
export function useLirik(segment) {
	const [data, setData] = useState();
	const [isLoading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	useEffect(() => {
		setLoading(true);
		setError(false);
		fetch(`https://azibcepe.gitlab.io/liriklagu/data/${segment}/index.json`)
			.then((data) => data.json())
			.then(setData)
			.catch(e => {
				setError(new Error("While Loading Data"));
			})
			.finally(() => setLoading(false));
	}, [segment]); // fetch only when segment changed
	return { error, isLoading, data };
}
