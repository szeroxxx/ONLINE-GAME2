import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./order.css";
import { getCookie } from "../cookie";
import { GetOrders } from "../api";

function Order(props) {
  const [selected, setselected] = useState("fastparity");
  const [myOrder, setMyOrder] = useState([]);
  const history = useNavigate();
  const token = getCookie("token");

  async function fetchOrders() {
    try {
      console.log("fetchOrder called");
      if (!token) history("/");
      const payload = {
        type: 1,
        offset: 0,
        limit: 100,
      };
      const { data } = await GetOrders(token, payload);
      if (data?.result) {
        setMyOrder(data.result);
      }
    } catch (e) {
      const errorMessage = e.message ? e.message : e;
      console.log("fetchOrders errorMessage:", errorMessage, " error:", e);
      return false;
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container">
      <div
        className="card_header"
        style={{
          backgroundColor: props.darkTheme ? "black" : "#644fd1",
          color: props.darkTheme ? "white" : "white",
        }}
      >
        <Link to={"/my"}>
          <img
            src="https://www.fastwin.app/includes/icons/back_wt.png"
            alt=""
          />
        </Link>
        <p style={{ fontWeight: "bolder", fontSize: "18px" }}>Order</p>
        <p></p>
      </div>

      <div
        className="order_main"
        style={{
          backgroundColor: props.darkTheme ? "#181818" : "white",
          color: props.darkTheme ? "white" : "black",
        }}
      >
        <div
          className="order_main_header"
          style={{
            backgroundColor: props.darkTheme ? "black" : "#644fd1",
            color: props.darkTheme ? "white" : "white",
          }}
        >
          <div
            className={`order_main_header_option ${
              selected == "fastparity" && "order_main_header_option_selected"
            }`}
            onClick={() => setselected("fastparity")}
          >
            FastParity
          </div>
          <div
            className={`order_main_header_option ${
              selected == "h&t" && "order_main_header_option_selected"
            }`}
            onClick={() => setselected("h&t")}
          >
            Head&Tail
          </div>
          <div
            className={`order_main_header_option ${
              selected == "anB" && "order_main_header_option_selected"
            }`}
            onClick={() => setselected("anB")}
          >
            AndarBahar
          </div>
        </div>
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
                    <td>{data.game_id}</td>
                    <td style={{ textAlign: "center" }}>
                      <div
                        className={
                          "game_main_record_circle " +
                          (data?.value == 8 ||
                          data?.value == 5 ||
                          data?.value == 2 ||
                          data?.value == "R"
                            ? "red"
                            : (data?.value % 3 && data?.value != 0) ||
                              data.value === "V"
                            ? "violet"
                            : "green")
                        }
                      >
                        {data.value}
                      </div>
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                        color:
                          data.status == 1
                            ? "green"
                            : data.status == 3
                            ? "yellow"
                            : "red",
                      }}
                    >
                      {data.status == 1
                        ? "Win"
                        : data.status == 3
                        ? "Pending"
                        : "Lose"}
                    </td>
                    <td style={{ textAlign: "center" }}>{data.amount}</td>
                    <td style={{ textAlign: "center" }}>
                      {data.winning_amount}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;
