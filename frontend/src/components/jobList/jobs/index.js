import React, { useState } from 'react';
import { Input } from "reactstrap";
import List from './list';

function Jobs() {
  const [inputVal, setInputVal] = useState("");
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <Input value={inputVal} onChange={handleChange}/>
      { inputVal.length > 0 && <List />}
    </div>
  )
}

export default Jobs;