import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";


const Orders = () => {

  const [allOrders,setAllOrders]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3002/allOrders")
    .then((res)=>{
    setAllOrders(res.data);
    console.log(res.data);
    })
  },[])
  return (
    <>
      <h3 className="title">Holdings ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {allOrders.map(
            (stock,index)=>{
           
               

                 return(
                  <tr key={index}>
                    <td>{stock.name}</td>
                <td>{stock.qty}</td>
                {/* <td>{stock.avg?.toFixed(2) ?? "N/A"}</td> */}
                <td>{stock.price?.toFixed(2) ?? "N/A"}</td>
                {/* <td>{curValue?.toFixed(2) ?? "N/A"}</td> */}
                {/* <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td> */}
                <td>{stock.mode}</td>
                </tr>
                 )
            }
          )
          }
        </table>
      </div>
    </>
  );
};

export default Orders;