import React from "react";

import "../../styles/menuCard.css";

function MenuCard(props) {
  const { menu } = props;
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={menu.image}
        alt="Menu"
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {" "}
          {menu.name} : {menu.price}{" "}
        </h5>
        <p className="card-text"> {menu.description} </p>
        <a href="#buy" className="btn btn-primary">
          Order Now
        </a>
      </div>
    </div>
  );
}

export default MenuCard;
