import React from "react";
import { Link } from "react-router-dom";

function MyOrder(props) {
  return (
    <div className="game_main_users_table">
      <table className="game_main_users_table_table">
        <tbody>
          <tr>
            <th>Period</th>
            <th>Point</th>
            <th>Result</th>
            <th>Amount</th>
            <th>Win(&#8377;)</th>
          </tr>
          {props?.result?.length > 0 &&
            props?.result?.map((data, i) => (
              <tr key={i}>
                <td>{data?.game_id}</td>
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
                          data?.value === "V"
                        ? "violet"
                        : "green")
                    }
                  >
                    {data?.value}
                  </div>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    color:
                      data?.status == 1
                        ? "green"
                        : data?.status == 2
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
      <Link
        to={"/order"}
        className="my_order_btn"
        style={{
          backgroundColor: props.myOrderMode ? "black" : "#f1f1f1",
          marginBottom: "20px",
        }}
      >
        more {">"}
      </Link>
    </div>
  );
}

export default MyOrder;
