import { useState, useEffect } from "react";

// useEffect hooks, this will run at every render
// usually used for fetching data or anything we need everytime there's a rerender
// empty dependency array meant that this hooks will only ran at initialization (once)

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // creating an abort controller
    // this will stop fetching data on create page
    // because we dont need to display blogs on create page
    // there's no need to fetch data
    // on newer version of react hoewver it is automagically handled
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data");
        }

        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log('fetch aborted');
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });

    // abort whatever fetch its associated with
    return () => abortCont.abort();
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
