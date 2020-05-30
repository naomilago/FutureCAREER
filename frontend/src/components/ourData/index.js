import React from 'react';

import { VLine } from "./styled";
import Box from "./box";
import { ReactComponent as EmployeeIcon } from "../../assets/employee.svg";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";
import { ReactComponent as JobsIcon } from "../../assets/jobs.svg";

function OurData() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 my-5">
      <Box Icon={EmployeeIcon} amount={50} subtitle="Employees"/>
      <VLine />
      <Box Icon={LocationIcon} amount={30} subtitle="Locations" />
      <VLine />
      <Box Icon={JobsIcon} amount={90} subtitle="Jobs" />
    </div>
  );
}

export default OurData;