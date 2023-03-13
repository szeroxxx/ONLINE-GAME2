import React from "react";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import { Navbar, Sidebar } from "../components";

const QuizManagement = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ml-0">
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
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="mt-24 p-2 w-full">
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-64 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p
                  className="font-bold text-gray-400"
                  style={{ marginBottom: "10%" }}
                >
                  Color Game
                </p>
                <Button
                  text={"Manage"}
                  bgColor={currentColor}
                  color={"white"}
                  borderRadius={"10%"}
                />
                <br />
                <p
                  style={{
                    marginTop: "10%",
                    fontWeight: "300",
                    marginBottom: "10%",
                  }}
                >
                  Manage Profit Mode{" "}
                </p>
                <input type="radio" name="radio" />
                <span>Low</span> <br />
                <input type="radio" name="radio" />
                <span>Medium</span> <br />
                <input type="radio" name="radio" />
                <span>High</span> <br />
              </div>
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-64 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p
                  className="font-bold text-gray-400"
                  style={{ marginBottom: "10%" }}
                >
                  Andar Bahar
                </p>
                <Button
                  text={"Manage"}
                  bgColor={currentColor}
                  color={"white"}
                  borderRadius={"10%"}
                />
                <br />
                <p
                  style={{
                    marginTop: "10%",
                    fontWeight: "300",
                    marginBottom: "10%",
                  }}
                >
                  Manage Profit Mode{" "}
                </p>
                <input type="radio" name="radio" />
                <span>Low</span> <br />
                <input type="radio" name="radio" />
                <span>Medium</span> <br />
                <input type="radio" name="radio" />
                <span>High</span> <br />
              </div>
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-64 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
            <div className="flex justify-between items-center">
              <div>
                <p
                  className="font-bold text-gray-400"
                  style={{ marginBottom: "10%" }}
                >
                  Spin Wheel
                </p>
                <Button
                  text={"Manage"}
                  bgColor={currentColor}
                  color={"white"}
                  borderRadius={"10%"}
                />
                <br />
                <p
                  style={{
                    marginTop: "10%",
                    fontWeight: "300",
                    marginBottom: "10%",
                  }}
                >
                  Manage Profit Mode{" "}
                </p>
                <input type="radio" name="radio" />
                <span>Low</span> <br />
                <input type="radio" name="radio" />
                <span>Medium</span> <br />
                <input type="radio" name="radio" />
                <span>High</span> <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizManagement;
