//class-work

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';

// interface WelcomeProps {
//   name: string;
// }

// // const Welcome: React.FC<WelcomeProps> = (props) => {
// //   // eslint-disable-next-line react/prop-types
// //   return <h1> Hello, {props.name}</h1>;

// const Welcome: React.FC<{ name: string }> = ({  name }) => (
// <h1>Hello, {name}</h1>
// )


// const element = <Welcome name="Sara" />
// ReactDOM.render(
//  element,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
const App =() => {
  const courseName = "Half Stack application development";
  const courseParts: Array<any> = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header name={courseName} />
      <Content content={courseParts}/>
      <Total total={courseParts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
