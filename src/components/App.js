import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div id="main">
      {!data ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Data Fetched from API</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default App;
