import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="search">
      <form action="">
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
