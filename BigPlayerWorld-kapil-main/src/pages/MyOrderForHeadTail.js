import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./order.css";
import { getCookie } from "../cookie";
import { GetHeadTailOrders, GetOrders } from "../api";

function MyOrderForHeadTail(props) {
  const [selected, setselected] = useState("fastparity");
  const [myOrder, setMyOrder] = useState([]);

  const history = useNavigate();
  const token = getCookie("token");
  useEffect(() => {
    fetchMyOrder();
  }, []);
  async function fetchMyOrder() {
    try {
      if (!token) history("/");
      const payload = {
        type: 1,
        offset: 100,
      };
      const { data } = await GetHeadTailOrders(token, payload);
      if (data?.result) {
        
        setMyOrder(data.result);
      }
    } catch (e) {
      return false;
    }
  }

 

  return (
    <div className="container">
      <div
        className="card_header"
        style={{
          backgroundColor: props.darkTheme ? "black" : "#644fd1",
          color: props.darkTheme ? "white" : "white",
        }}
      >
        <Link to={"/HeadandTail"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px" }}> Head & Tail My Order</p>
        <p></p>
      </div>

      <div
        className="order_main"
        style={{
          backgroundColor: props.darkTheme ? "#181818" : "white",
          color: props.darkTheme ? "white" : "black",
        }}
      >
       
        <div className="order_main_table">
          <table className="order_table_content">
            <tbody>
              <tr>
                <th>Period</th>
                <th>Point</th>
                <th>Result</th>
                <th>Amount</th>
                <th>Win(&#8377;)</th>
              </tr>
              {myOrder.length > 0 &&
                myOrder.map((data, i) => (
                  <tr key={i}>
                    <td style={{ textAlign: "center" }}>{data?.game_id}</td>
                    <td style={{ padding: "5px 0px 0px 15px" }}>
                      <div data-v-11837e31="" className="pokerRecord-result">
                        <div data-v-11837e31="" className="pokerRecord-result3">
                          {data?.value === "1" ? "T" : "H"}
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        color:
                        data.status == 1
                        ? "green"
                        : data.status == 2
                        ? "blue"
                        : "red",
                      }}
                    >
                      {data?.status == 1
                        ? "Win"
                        : data?.status == 2
                        ? "Pending"
                        : "Lose"}
                    </td>
                    <td style={{ textAlign: "center" }}>{data?.amount}</td>
                    <td style={{ textAlign: "center" }}>{data?.winning_amount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyOrderForHeadTail;
