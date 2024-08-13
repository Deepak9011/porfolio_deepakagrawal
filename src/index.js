import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./Context";
import ReactDOM from 'react-dom/client';


// ReactDOM.render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ThemeProvider><App/></ThemeProvider>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals