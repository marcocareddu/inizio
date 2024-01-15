import React from "react";
import List from "./List";
import data from "./data";

function App() {
  return (
    <section>
      <div className="container">
        <h2>Prossimi Incontri</h2>
        <div className="people-list">
          <List data={data} />
        </div>
      </div>
      <div className="btn-group">
        <button className="btn btn-reset"> Reload </button>

        <button className="btn btn-delete"> Delete all</button>
      </div>
    </section>
  );
}

export default App;
