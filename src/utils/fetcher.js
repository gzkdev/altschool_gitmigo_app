const fetcher = (val) => fetch(val).then((res) => res.json());

export default fetcher;
