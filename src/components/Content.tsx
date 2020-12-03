/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface ContentProps {
  content: any[],
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <h3>{props.content.map(p => <ul key={Math.random()}>{p.name}</ul>)}</h3>
  )
}
export default Content;
