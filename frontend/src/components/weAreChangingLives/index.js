import React from 'react';

import { ReactComponent as HugeGlobal } from "../../assets/huge-global.svg"

function WeAreChangingLives() {
  return (
    <div className="d-flex flex-column align-items-center w-100 my-5">
    <div className="my-2">
        <h5>We Are Changing Lives All Over the World</h5>
        <p className="text-secondary">
          See <span className="font-weight-bold">FutureCAREER</span> everywhere to make it easier for you when you want to apply for a job.
        </p>
      </div>
      <HugeGlobal />
    </div>
  )
}

export default WeAreChangingLives;