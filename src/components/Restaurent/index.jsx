import React from "react";

import MenuCard from "./MenuCard";

import menu from "../../data/menu.json";

function Restaurent() {
  return (
    <div>
      <div class="d-flex flex-wrap p-2">
        <MenuCard menu={menu} />
      </div>
    </div>
  );
}

export default Restaurent;
