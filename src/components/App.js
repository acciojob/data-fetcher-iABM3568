import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div id="main">
      {/* Do not remove the main div */}

      {data && (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

    </div>
  );
};

export default App;
