import React from "react";
const api = {
  key: "b55281e8bfefd1458ae4dadcd74cf082",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="app">
        <main>
          <div className="search-box">
            <input 
            type="text"
            className="search-bar"
            placeholder="search..."
            />
          </div>
        </main>
    </div>
  );
}

export default App;
