import React, { useMemo } from 'react';
import User from './user';

function List() {
  const items = useMemo(() => new Array(3).fill(0), []);
  return (
    <div className="w-100">
      {items.map((_, index) => <User key={index}/>)}
    </div>
  );
}

export default List;