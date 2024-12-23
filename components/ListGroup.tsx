import { useState } from "react";

function ListGroup() {
  let items = ["NEW YORK", "SAN FRANCISCO", "TOKYO", "LONDON", "PARIS"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>list</h1>
      {items.length === 0 && <p>NO ITEM FOUND</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
