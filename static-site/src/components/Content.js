import React from "react";
import ReactDOM from "react-dom/client";

const Content = () => {
  return (
    <div className="content">
      <h1>Fun Facts About React</h1>
      <ul className="facts">
        <li>
          <span>React is not a framework</span>
        </li>
        <li>
          <span>Virtual DOM is faster than real DOM</span>
        </li>
        <li>
          <span>React has over 100k stars on Github</span>
        </li>
        <li>
          <span>React is one of the most marketable developer skills</span>
        </li>
      </ul>
    </div>
  );
};

export default Content;
