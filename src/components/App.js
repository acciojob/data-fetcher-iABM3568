import React, { useEffect, useState } from "react";
import "./../styles/App.css";

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
      {/* Do not remove the main div */}

      <pre>
        {data ? JSON.stringify(data, null, 2) : "Loading..."}
      </pre>

    </div>
  );
};

export default App;
