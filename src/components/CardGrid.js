import React from "react";
import CardItem from "./CardItem";
import Spinner from "./Spinner";

const CardGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <h1>Characters</h1>
      <section className="container1">
        {items.map((item) => (
          <CardItem key={item.character.id} item={item} />
        ))}
      </section>
    </>
  );
};
export default CardGrid;
