import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = [
  {id:"TBM1234567", table:"1", name:"John Woods", type:"Delivery", payment:"Un-Paid", status:"Updated order"},
  {id:"TBM1234567", table:"2", name:"Sonu Singh", type:"Dine In", payment:"Un-Paid", status:"New order"},
  {id:"TBM1234567", table:"3", name:"Aditi Pareek", type:"Take Away", payment:"Paid", status:"New order"},
  {id:"TBM1234567", table:"4", name:"Jai Marothiya", type:"Take Away", payment:"Paid", status:"New order"},
  {id:"TBM1234567", table:"5", name:"Sam Curran", type:"Delivery", payment:"Un-Paid", status:"Updated order"},
  {id:"TBM1234567", table:"6", name:"Carry Smith", type:"Dine In", payment:"Paid", status:"Updated order"},
  {id:"TBM1234567", table:"7", name:"Illeana D'Cruz", type:"Delivery", payment:"Un-Paid", status:"New order"},
  {id:"TBM1234567", table:"8", name:"Morison Morkel", type:"Delivery", payment:"Paid", status:"New order"},
  {id:"TBM1234567", table:"9", name:"Virat Kohli", type:"Dine In", payment:"Un-Paid", status:"New order"},
  {id:"TBM1234567", table:"10", name:"Cristiano Ronaldo", type:"Take Away", payment:"Paid", status:"Updated order"},
  {id:"TBM1234567", table:"11", name:"Leonal Messi", type:"Delivery", payment:"Paid", status:"Updated order"},
  {id:"TBM1234567", table:"12", name:"Tanishk Marothiya", type:"Dine In", payment:"Paid", status:"New order"},
  {id:"TBM1234567", table:"13", name:"Divya Sharma", type:"Take Away", payment:"Un-Paid", status:"Updated order"},
  {id:"TBM1234567", table:"14", name:"Mahi Bhai", type:"Take Away", payment:"Un-Paid", status:"New order"},
  {id:"TBM1234567", table:"15", name:"Kiara Advani", type:"Delivery", payment:"Un-Paid", status:"New order"},
  {id:"TBM1234567", table:"16", name:"Steve Jobs", type:"Delivery", payment:"Paid", status:"New order"},
  {id:"TBM1234567", table:"17", name:"Stephen Curry", type:"Dine In", payment:"Paid", status:"Updated order"},
  {id:"TBM1234567", table:"18", name:"Olly Pope", type:"Take Away", payment:"Un-Paid", status:"Updated order"},
  {id:"TBM1234567", table:"19", name:"Niki Sharma", type:"Dine In", payment:"Paid", status:"Updated order"},
  {id:"TBM1234567", table:"20", name:"Ishu Pawar", type:"Dine In", payment:"Un-Paid", status:"Updated order"}  
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
