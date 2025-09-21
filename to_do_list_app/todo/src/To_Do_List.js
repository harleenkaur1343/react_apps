import React from "react";
import { useState } from "react";

function To_Do_List() {
  const [items, setItems] = useState(["Hand Towels"]);
  const [filterValue, setFilterValue] = useState("");

  function onValChange(e) {
    
  }

  function SearchBar() {
    return (
      <form>
        <input
          placeholder="Seach/Add Items"
          value={filterValue}
          onChange={(e) => onValChange(e)}
        ></input>
        <button>+</button>
        <button>-</button>
      </form>
    );
  }
  // always use return with {}
  //else js expects a block of code not return

  const listitems = items.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    //static - ul
    //dynamic - list items
    <>
      <h3> Your Travel List</h3>
      <SearchBar></SearchBar>
      <ul>{listitems}</ul>
    </>
  );
}

export default To_Do_List;
