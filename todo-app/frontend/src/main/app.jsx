import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import React from "react";
import About from "../about/about";
import Todo from "../todo/todo";

const App = () => {
  return (
    <div className="container">
      <Todo />
      <About />
    </div>
  );
};

export default App;
