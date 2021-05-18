import React from "react";
import EpisodeItem from "./EpisodeItem";

const Episodes = ({ items3, items4 }) => {
  return (
    <div className="seasons">
      <h1>Seasons</h1>
      <section className="row-table">
        {items3.map((item3) => (
          <EpisodeItem key={item3.id} item3={item3} items4={items4} />
        ))}
      </section>
    </div>
  );
};

export default Episodes;
