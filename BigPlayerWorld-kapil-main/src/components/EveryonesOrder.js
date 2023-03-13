import React, { useEffect, useState } from "react";

function EveryonesOrder(props) {
  const [result, setResult] = useState([]);
  function init() {
    let start = Math.ceil(Math.random() * 40 + 1);
    if (!props?.result?.length) return;
    let res = [];
    for (let i = 0; i < 10; i++) {
      res.push(props.result[start + i]);
    }
    setResult(res);
  }

  useEffect(() => {
    init();
    const id = setInterval(init, 5000);
    return () => {
      clearInterval(id);
    };
  }, [props.result]);

  return (
    <div className="game_main_users_table">
      <table className="game_main_users_table_table">
        <tbody>
          <tr>
            <th>Period</th>
            <th>User</th>
            <th>Select</th>
            <th>Points</th>
          </tr>
          {result.length > 0 &&
            result[0] != undefined &&
            result.map((data, i) => (
              <tr key={i}>
                <td>{data.game_id}</td>
                <td>***{data.mobile.substring(7)}</td>
                <td style={{ textAlign: "center" }}>
                  <div
                    className={
                      "game_main_record_circle " +
                      (data?.value == 8 || data?.value == 5 || data?.value == 2
                        ? "red"
                        : data?.value % 3 && data?.value != 0
                        ? "violet"
                        : "green")
                    }
                  >
                    {data.value}
                  </div>
                </td>
                <td style={{ textAlign: "center" }}>{data.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default EveryonesOrder;
