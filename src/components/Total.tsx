/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface TotalProps {
    total: any[];
}

const Total: React.FC<TotalProps> = (props) => {

  console.log(props.total);
  return (
  <h3>{`Total count is: ${props.total.reduce((carry, part) => carry + part.exerciseCount, 0)}`}</h3>
  )
}
export default Total;