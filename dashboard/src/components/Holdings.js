import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";
import {holdings} from "../data/data.js";
import {VerticalGraph} from "./VerticalGraph.js";

const Holdings = () => {

  const [allHoldings,setAllHoldings]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);


const labels=allHoldings.map((subArray)=>subArray["name"]);
const data={
  labels,
  datasets:[{
    label: 'Price',
    data: allHoldings.map((stock) =>stock.price ),
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  }
  ]
}
  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };
  
  
  // let totalInvestment = holdings.reduce((acc, stock) => {
  //   return acc + (stock.avg * stock.qty);
  // }, 0);
  

  // let totalCurrentValue = holdings.reduce((acc, stock) => {
  //   return acc + (stock.price * stock.qty);
  // }, 0);

  // let totalPL = holdings.reduce((acc, stock) => {
  //   return acc + ((stock.price - stock.avg) * stock.qty);
  // }, 0);
  
  
  
  
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
   <table>
  <thead>
    <tr>
      <th>Instrument</th>
      <th>Qty.</th>
      <th>Avg. cost</th>
      <th>LTP</th>
      <th>Cur. val</th>
      <th>P&L</th>
      <th>Net chg.</th>
      <th>Day chg.</th>
    </tr>
  </thead>
  <tbody>
    {allHoldings.map((stock, index) => {
      const qty = Number(stock.qty) || 0;
      const price = Number(stock.price) || 0;
      const avg = stock.avg ?? price; // fallback to price if avg not available

      const curValue = qty * price;
      const pl = curValue - avg * qty;
      const isProfit = pl >= 0;
      const profClass = isProfit ? "profit" : "loss";
      const dayClass = stock.isloss ? "loss" : "profit";

      return (
        <tr key={index}>
          <td>{stock.name}</td>
          <td>{qty}</td>
          <td>{avg.toFixed(2)}</td>
          <td>{price.toFixed(2)}</td>
          <td>{curValue.toFixed(2)}</td>
          <td className={profClass}>{pl.toFixed(2)}</td>
          <td className={profClass}>{pl.toFixed(2)}</td>
          <td className={dayClass}>{stock.day ?? "N/A"}</td>
        </tr>
      );
    })}
  </tbody>
</table>
</div>



<div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;