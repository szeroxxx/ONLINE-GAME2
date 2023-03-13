import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { DeleteUser, GetUserActivity } from "../../api";
import { getCookie } from "../../cookie";
import { Navbar, Sidebar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import "./UserActivity.css";
const UserActivity = () => {
  const token = getCookie("token");

  const location = useLocation();
  const userId = location.state && location.state.userId;
  const { setCurrentColor, setCurrentMode, activeMenu } = useStateContext();
  const [userActivityData, setUserActivityData] = useState();
  useEffect(() => {
    getUserActivity();
  }, [userId]);
  const getUserActivity = () => {
    try {
      GetUserActivity(token, userId)
        .then(({ data }) => {
          setUserActivityData(data.user[0]);
        })
        .catch((e) => {});
    } catch (error) {}
  };
  const handleDelete = () => {
    DeleteUser(token);
  };
  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div
            className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ml-0"
            style={{ width: "15rem" }}
          >
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg ml-0">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  margin-left-big"
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 margin-left-small"
          }
        >
          <div className="fixed static bg-main-bg dark:bg-main-dark-bg navbar w-full user_management_navbar">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="admin_background p-7 w-full">
        <div className="user_activity_top">
          <h2 style={{ fontWeight: "bold" }}>Activity</h2>
          <h2>ID User : {userActivityData?.id}</h2>
          <h2>Phone : {userActivityData?.mobile}</h2>
          <h2>Join Date : {userActivityData?.created_at.substring(0, 10)}</h2>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>

        <div className="user_activity_main">
          <h1 className="user_activity_heading">User Activity</h1>

          <div className="user_activity">
            <div className="actvity-time">
              <p className="activity">12 invoices have been paid</p>
              <p className="time">12 min ago</p>
            </div>
            <p className="detail">Invoices have been paid to the company</p>
            <p className="detail2">invoices.pdf</p>
          </div>

          <div className="user_activity">
            <div className="actvity-time">
              <p className="activity">Meeting with john</p>
              <p className="time">45 min ago</p>
            </div>
            <p className="detail">React Project meeting with john @10:15am</p>
            <p className="detail2">
              John Doe (Client).
              <br /> CEO of Kelly Group
            </p>
          </div>

          <div className="user_activity">
            <div className="actvity-time">
              <p className="activity">Create a new react project for client</p>
              <p className="time">2 day ago</p>
            </div>
            <p className="detail">Add files to new design folder</p>
            <p className="detail2"></p>
          </div>

          <div className="user_activity">
            <div className="actvity-time">
              <p className="activity">12 Create invoices for client</p>
              <p className="time">5 day ago</p>
            </div>
            <p className="detail">
              Weekly review of freshly prepared design for our new app.
            </p>
            <p className="detail2"></p>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserActivity;

{
  /* <div class="timeline">
            <div class="outer">
              <div class="card">
                <h3 class="title">Title 1</h3>
                
                <div class="info">
                  <h3 class="title">Title 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="info">
                  <h3 class="title">Title 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div> */
}

// <div className="user_activity_table" style={{ marginTop: "10px" }}>
// <table className="user_activity_table">
//   <tbody>
//     <tr>
//       <td>Activity</td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//     <tr>
//       <td>Register</td>
//       <td>01/12/2022</td>
//       <td>002</td>
//       <td></td>
//       <td></td>
//       <td>01/12/2022</td>
//       <td>01:12 AM</td>
//     </tr>
//     <tr>
//       <td>Recharge</td>
//       <td>+500</td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td>01/12/2022</td>
//       <td>01:12 AM</td>
//     </tr>
//     <tr>
//       <td>Play</td>
//       <td>Parity</td>
//       <td>5</td>
//       <td>500</td>
//       <td>Won</td>
//       <td>01/12/2022</td>
//       <td>01:12 AM</td>
//     </tr>
//     <tr>
//       <td>Play</td>
//       <td>Quiz</td>
//       <td>GK</td>
//       <td>100</td>
//       <td>Lose</td>
//       <td>01/12/2022</td>
//       <td>01:12 AM</td>
//     </tr>
//     <tr>
//       <td>Play</td>
//       <td>AB</td>
//       <td>Yes</td>
//       <td>100</td>
//       <td>Lose</td>
//       <td>01/12/2022</td>
//       <td>01:12 AM</td>
//     </tr>
//   </tbody>
// </table>
// </div>
