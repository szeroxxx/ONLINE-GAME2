import React from "react";
import { Link } from "react-router-dom";
function HeadTailMyOrder(props) {
  return (
    <div>
      <table className="head_tail_myorder_table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Period</th>
            <th>Point</th>
            <th>Result</th>
            <th>Amount</th>
            <th>Win(&#8377;)</th>
          </tr>
        </thead>
        <tbody>
          {props?.result.length > 0 &&
            props?.result.slice(0, 10).map((data, i) => (
              <tr key={i}>
                <td
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    color: "black",
                  }}
                >
                  {data?.game_id}
                </td>
                <td style={{ padding: "3px 0px 0px 15px" }}>
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
                    fontSize: "13px",
                  }}
                >
                  {data?.status == 1
                    ? "Win"
                    : data?.status == 2
                    ? "Pending"
                    : "Lose"}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    color: "black",
                  }}
                >
                  {data?.amount}
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontSize: "13px",
                    color: "black",
                  }}
                >
                  {data?.winning_amount}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Link
        to={"/MyOrderForHeadTail"}
        className="my_order_btn"
        style={{
          backgroundColor: props.myOrderMode ? "black" : "#f1f1f1",
          marginBottom: "20px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        more {">"}
      </Link>
    </div>
  );
}

export default HeadTailMyOrder;
