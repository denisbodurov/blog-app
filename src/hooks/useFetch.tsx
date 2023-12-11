import { useEffect, useState } from 'react';


function useFetch(url:string) {
    
    const [data, setData] = useState<any | null>(null);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error("Could not fetch data!");
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setError(null);
                setData(data);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;