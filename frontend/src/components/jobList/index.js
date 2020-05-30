import React from 'react';

import Jobs from "./jobs";

function JobList() {
  return (
    <div className="d-flex flex-column justify-content-center w-75 m-auto">
      <div className="m-auto">
        <h2>Search for a job</h2>
        <p className="text-secondary">
        Let us bring you the best results for your search</p>
      </div>
      <Jobs />
    </div>
  );
}

export default JobList;