import React, { useState } from "react";
import Card from "./Card";

const CardGrids = (props) => {
  const cards = props.pokeNames.map((poke) => (
    <Card
      name={poke.poke}
      index={poke.index + 1}
      selectPokemon={props.selectPokemon}
      key={poke.index}
    />
  ));

  return (
    <div className="container pb-5">
      <div className="row ">{cards}</div>
    </div>
  );
};

export default CardGrids;
