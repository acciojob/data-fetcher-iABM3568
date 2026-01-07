import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setData(JSON.stringify(result, null, 2));
      });
  }, []);

  return (
    <div id="main">
      {/* Do not remove the main div */}

      <pre>{data}</pre>

    </div>
  );
};

export default App;
