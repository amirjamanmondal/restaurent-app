import React from "react";

import MenuCard from "./MenuCard";

import menu from "../../data/menu.json";

function Restaurent() {
  const menuList = menu.map((m) => {
    return <MenuCard menu={m} />;
  });
  return (
    <div>
      <div class="container-fluid">
        <div class="d-flex flex-wrap p-2">{menuList}</div>
      </div>
    </div>
  );
}

export default Restaurent;
