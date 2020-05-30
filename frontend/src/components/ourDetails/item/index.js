import React from 'react';
import { ReactComponent as CheckedIcon } from "../../../assets/checked.svg"

function Item({ desc }) {
  return (
    <li>
      <div className="d-flex">
      <div className="mr-2">
        <CheckedIcon />
      </div>
        <p className="text-dark">
          {desc}
        </p>
      </div>
    </li>
  )
}

export default Item;