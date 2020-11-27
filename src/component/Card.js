import React from "react";

const Card = (props) => {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`;
  const handleSelect = () => {
    props.selectPokemon(props.name);
  };
  return (
    <div
      className=" col-12  col-sm-6 col-md-4  col-lg-3"
      onClick={handleSelect}
    >
      <div
        className="card mt-4 shadow rounded"
        style={{ width: "14rem", cursor: "pointer" }}
      >
        <img className="card-img-top" src={src} ßalt={props.name} />
        <div className="card-body">
          <h4 className="card-text text-info text-center">{props.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
