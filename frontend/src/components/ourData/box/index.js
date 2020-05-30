import React from 'react';

function Box({Icon, amount, subtitle}) {
  return (
    <div className="d-flex">
    <Icon />
    <div className="d-flex flex-column ml-2">
      <h5 className="font-weight-bold">
        {amount}+
      </h5>
      <p className="text-muted"> 
        {subtitle}
      </p>
    </div>
  </div>
  )
}

export default Box;