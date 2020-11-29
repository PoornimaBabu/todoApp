import React from "react";
import Header from "./Header";
import List from "./List";

function App() {
  return (
    <div>
      <Header />
      <form>
        <button>Add New List...</button>
      </form>
      <List />
    </div>
  );
}

export default App;
