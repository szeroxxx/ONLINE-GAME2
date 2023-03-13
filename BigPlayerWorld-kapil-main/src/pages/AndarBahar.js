import React, { useState } from "react";
import { Link } from "react-router-dom";
import EveryonesOrder from "../components/EveryonesOrder";
import Fastparityform from "../components/Fastparityform";
import MyOrder from "../components/MyOrder";
import "./fastparty.css";
import "./andarbahar.css";

function AndarBahar(props) {
  const selects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [select, setselect] = useState("");
  const [color, setcolor] = useState("");
  const [walletAmount, setWalletAmount] = useState(0);

  var formDarkMode = props.darkTheme;

  const [ordertype, setordertype] = useState("everyone");
  return (
    <div data-v-7ba5bd90="" className="layout container">
      {/**/}
      <span data-v-7ba5bd90="">
        <div data-v-7ba5bd90="" style={{ display: "none" }}>
          {/**/}
        </div>
        <div data-v-11837e31="" data-v-7ba5bd90="" className="pokerindex-page">
          <div data-v-11837e31="" className="layout">
            <div data-v-11837e31="" className="pokerindex">
              <div
                data-v-11837e31=""
                className="van-nav-bar van-hairline--bottom"
              >
                <div className="van-nav-bar__content">
                  <div className="van-nav-bar__left">
                    <Link
                      to={"/dashboard"}
                      className="van-icon van-icon-arrow-left van-nav-bar__arrow"
                    >
                      {/**/}
                    </Link>
                  </div>
                  <div className="van-nav-bar__title van-ellipsis">
                    Andar Bahar
                  </div>
                  <div className="van-nav-bar__right">
                    <div data-v-11837e31="" className="wh">
                      <i
                        data-v-11837e31=""
                        className="van-icon van-icon-question-o"
                      >
                        {/**/}
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-11837e31="" className="PokergameBox">
                <div data-v-3e76bb0a="" data-v-11837e31="" id="wrap">
                  <div data-v-3e76bb0a="" className="pokergametop" />
                  <div data-v-3e76bb0a="" id="head" className="clearfix">
                    <div data-v-3e76bb0a="" className="head-top">
                      <span data-v-3e76bb0a="" style={{ fontSize: "1rem" }}>
                        Period
                      </span>
                      <span data-v-3e76bb0a="" style={{ fontSize: "1rem" }}>
                        Count Down
                      </span>
                    </div>
                    <div data-v-3e76bb0a="" className="head-bot">
                      <span data-v-3e76bb0a="">
                        11202210271317
                        <br data-v-3e76bb0a="" />{" "}
                        <p
                          data-v-3e76bb0a=""
                          className="text_color"
                          style={{ fontSize: "1rem" }}
                        >
                          ₹ 0.00
                        </p>
                      </span>
                      <div data-v-3e76bb0a="" className="van-count-down">
                        <div data-v-3e76bb0a="" className="head-time">
                          {/**/}
                          <span
                            data-v-3e76bb0a=""
                            className="head-time-s1 numdupdate"
                          >
                            0
                          </span>
                          <span
                            data-v-3e76bb0a=""
                            className="head-time-s2 numdupdate"
                          >
                            0
                          </span>
                          <i
                            data-v-3e76bb0a=""
                            className="head-time-i numdupdate"
                          >
                            :
                          </i>
                          {/**/}
                          <span
                            data-v-3e76bb0a=""
                            className="head-time-s3 numdupdate"
                          >
                            0
                          </span>
                          <span
                            data-v-3e76bb0a=""
                            className="head-time-s4 numdupdate"
                          >
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-3e76bb0a="" id="mid" className="clearfix">
                    <div data-v-3e76bb0a="" className="col-3">
                      <div data-v-3e76bb0a="" className="card-lef">
                        <div
                          data-v-3e76bb0a=""
                          id="card-front-item"
                          className="card-front-item card-front-user"
                          style={{ opacity: 0 }}
                        >
                          <p data-v-3e76bb0a="">Andar</p>
                        </div>

                        <div data-v-3e76bb0a="" className="card-front-item">
                          {/**/}
                          <p data-v-3e76bb0a="" className="card-front-p">
                            8
                          </p>
                          <div data-v-3e76bb0a="" className="card-front-pic">
                            <img
                              data-v-3e76bb0a=""
                              src="https://sungame.in/mining/https://sungame.in/mining/img/back5.882c1090.png"
                            />
                          </div>
                        </div>
                        <div data-v-3e76bb0a="" className="card-front-item">
                          <p
                            data-v-3e76bb0a=""
                            className="card-front-p card-red"
                          >
                            Q
                          </p>
                          {/**/}
                          <div data-v-3e76bb0a="" className="card-front-pic">
                            <img
                              data-v-3e76bb0a=""
                              src="img/card-fk.be385342.png"
                            />
                          </div>
                        </div>
                        <div data-v-3e76bb0a="" className="card-front-item">
                          {/**/}
                          <p data-v-3e76bb0a="" className="card-front-p">
                            K
                          </p>
                          <div data-v-3e76bb0a="" className="card-front-pic">
                            <img
                              data-v-3e76bb0a=""
                              src="https://sungame.in/mining/img/card-hx.59a82851.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-3e76bb0a="" className="col-3">
                      <div data-v-3e76bb0a="" className="card-top">
                        <div data-v-3e76bb0a="" className="card-top-con">
                          <div data-v-3e76bb0a="" className="card-front-item">
                            {/**/}
                            <p data-v-3e76bb0a="" className="card-front-p">
                              K
                            </p>
                            <div data-v-3e76bb0a="" className="card-front-pic">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/card-hx.59a82851.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-v-3e76bb0a="" className="card-mid">
                        <div data-v-3e76bb0a="" className="card-mid-con">
                          <div data-v-3e76bb0a="" className="card-bar">
                            <div data-v-3e76bb0a="" className="card-bar-item">
                              <div data-v-3e76bb0a="" className="back">
                                <img
                                  data-v-3e76bb0a=""
                                  src="https://sungame.in/mining/img/back5.882c1090.png"
                                />
                              </div>
                              <div data-v-3e76bb0a="" className="front">
                                <div
                                  data-v-3e76bb0a=""
                                  className="card-front-item"
                                >
                                  <p
                                    data-v-3e76bb0a=""
                                    className="card-front-p card-red"
                                  >
                                    K
                                  </p>
                                  {/**/}
                                  <div
                                    data-v-3e76bb0a=""
                                    className="card-front-pic"
                                  >
                                    <img
                                      data-v-3e76bb0a=""
                                      src="img/card-fk.be385342.png"
                                    />
                                  </div>
                                </div>
                                {/**/}
                              </div>
                            </div>
                            <div data-v-3e76bb0a="" className="card-bar-item">
                              <div data-v-3e76bb0a="" className="back">
                                <img
                                  data-v-3e76bb0a=""
                                  src="https://sungame.in/mining/img/back5.882c1090.png"
                                />
                              </div>
                              <div data-v-3e76bb0a="" className="front">
                                <div
                                  data-v-3e76bb0a=""
                                  className="card-front-item"
                                >
                                  {/**/}
                                  <p
                                    data-v-3e76bb0a=""
                                    className="card-front-p"
                                  >
                                    10
                                  </p>
                                  <div
                                    data-v-3e76bb0a=""
                                    className="card-front-pic"
                                  >
                                    <img
                                      data-v-3e76bb0a=""
                                      src="img/card-mh.9e90eb0a.png"
                                    />
                                  </div>
                                </div>
                                {/**/}
                              </div>
                            </div>
                            <div data-v-3e76bb0a="" className="card-bar-item">
                              <div data-v-3e76bb0a="" className="back">
                                <img
                                  data-v-3e76bb0a=""
                                  src="https://sungame.in/mining/img/back5.882c1090.png"
                                />
                              </div>
                              <div data-v-3e76bb0a="" className="front">
                                <div
                                  data-v-3e76bb0a=""
                                  className="card-front-item"
                                >
                                  {/**/}
                                  <p
                                    data-v-3e76bb0a=""
                                    className="card-front-p"
                                  >
                                    J
                                  </p>
                                  <div
                                    data-v-3e76bb0a=""
                                    className="card-front-pic"
                                  >
                                    <img
                                      data-v-3e76bb0a=""
                                      src="img/card-mh.9e90eb0a.png"
                                    />
                                  </div>
                                </div>
                                {/**/}
                              </div>
                            </div>
                          </div>
                          <div data-v-3e76bb0a="" className="card-base-pic">
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                            <div data-v-3e76bb0a="">
                              <img
                                data-v-3e76bb0a=""
                                src="https://sungame.in/mining/img/back5.882c1090.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-3e76bb0a="" className="col-3">
                      <div data-v-3e76bb0a="" className="card-rig">
                        <div
                          data-v-3e76bb0a=""
                          className="card-front-item card-front-user"
                          style={{ opacity: 0 }}
                        >
                          <p data-v-3e76bb0a="">Bahar</p>
                        </div>
                        <div data-v-3e76bb0a="" className="card-front-item">
                          {/**/}
                          <p data-v-3e76bb0a="" className="card-front-p">
                            J
                          </p>
                          <div data-v-3e76bb0a="" className="card-front-pic">
                            <img
                              data-v-3e76bb0a=""
                              src="https://sungame.in/mining/ing/img/back5.882c1090.png"
                            />
                          </div>
                        </div>

                        <div data-v-3e76bb0a="" className="card-front-item">
                          {/**/}
                          <p data-v-3e76bb0a="" className="card-front-p">
                            K
                          </p>
                          <div data-v-3e76bb0a="" className="card-front-pic">
                            <img
                              data-v-3e76bb0a=""
                              src="https://sungame.in/mining/img/back5.882c1090.png"
                            />
                          </div>
                        </div>
                        <div data-v-3e76bb0a="" className="card-front-item">
                          {/**/}
                          <p data-v-3e76bb0a="" className="card-front-p">
                            9
                          </p>
                          <div data-v-3e76bb0a="" className="card-front-pic">
                            <img
                              data-v-3e76bb0a=""
                              src="https://sungame.in/mining/img/card-hx.59a82851.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-3e76bb0a=""
                    id="foot"
                    className="clearfix card-disabled"
                  >
                    <div data-v-3e76bb0a="" className="foot-lf">
                      <div
                        data-v-3e76bb0a=""
                        className="foot-btn"
                        onClick={() => {
                          setselect("Andar");
                          setcolor("green");
                        }}
                      >
                        Andar
                      </div>
                      <p data-v-3e76bb0a="" className="foot-p">
                        <span
                          data-v-3e76bb0a=""
                          style={{ fontSize: "1rem", fontWeight: "bold" }}
                        >
                          1:1.9
                        </span>
                      </p>
                    </div>
                    <div data-v-3e76bb0a="" className="foot-mid">
                      <div
                        data-v-3e76bb0a=""
                        className="foot-btn"
                        onClick={() => {
                          setselect("Tie");
                          setcolor("green");
                        }}
                      >
                        Tie
                      </div>
                      <p data-v-3e76bb0a="" className="foot-p">
                        <span
                          data-v-3e76bb0a=""
                          style={{ fontSize: "1rem", fontWeight: "bold" }}
                        >
                          1:15
                        </span>
                      </p>
                    </div>
                    <div data-v-3e76bb0a="" className="foot-rig clearfix">
                      <div
                        data-v-3e76bb0a=""
                        className="foot-btn"
                        onClick={() => {
                          setselect("Bahar");
                          setcolor("green");
                        }}
                      >
                        Bahar
                      </div>
                      <p data-v-3e76bb0a="" className="foot-p">
                        <span
                          data-v-3e76bb0a=""
                          style={{ fontSize: "1rem", fontWeight: "bold" }}
                        >
                          1:2
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    data-v-3e76bb0a=""
                    id="card-result"
                    className="card-result"
                    style={{ display: "none" }}
                  >
                    <div data-v-3e76bb0a="">
                      <div data-v-3e76bb0a="" className="card-result-con">
                        <div data-v-3e76bb0a="" className="card-result-top">
                          <img data-v-3e76bb0a="" src="img/11.13ffb5b5.png" />
                          <p data-v-3e76bb0a="">result</p>
                        </div>
                        <div data-v-3e76bb0a="" className="card-result-user">
                          <p
                            data-v-3e76bb0a=""
                            className="card-result-user-p betcorol3"
                          >
                            B
                          </p>
                        </div>
                        <div data-v-3e76bb0a="">
                          <button data-v-3e76bb0a="" type="button">
                            ok
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-3e76bb0a=""
                    className="card-start"
                    style={{ display: "none" }}
                  >
                    <div data-v-3e76bb0a="">
                      <p data-v-3e76bb0a="" className="">
                        start
                      </p>
                    </div>
                  </div>
                  <div data-v-3e76bb0a="" className="card-bet">
                    <div data-v-3e76bb0a="" className="card-bet-con">
                      <div data-v-3e76bb0a="" className="card-bet-top">
                        {" "}
                        <img
                          data-v-3e76bb0a=""
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABXElEQVRYR+2W0VHDQAxEdysgHaQESAdQSaAChk7oIOkklEAHpANCBWKUkTPEtnyS/GE+cj+ZSZTbd2tpz8TCiwvr4wbwPx0QkXcAawAvJE9z+kREVgB2AI4k3/p7DRywP3xb4SeApyqE7XUA8KD7kRzojT4Cc+B1DkRf3NzcNx3oCkREi7cViKj42ZWp51uByIg3AbQgA5EVDwFEISriYYAWRFU8BeBBWA9dRs3rdq/X0kk40hO693nOs+JpB5wR7b7W1BzMeStF0w7Yo9B4/QKgn7qOADaVxEwDjDRcd8hSbKcAxrrd1PWy0ZWGCANMjZqIPNuNl4YIAUTmvArRBIiI/5mOtBOty0i7PBUyWSdcgMzJ+7OegfBeSNInr0J4ADpO99V49XqC5KYP6gHoi+hdJdsnnPgh2SXnpcwD0MtlRfKjleWR30XkEcCJpDp7tZpjGBGYU3MDWNyBX/042iGoHMW5AAAAAElFTkSuQmCC"
                          className="card-bet-close"
                        />
                      </div>
                      <div
                        data-v-3e76bb0a=""
                        className="card-bet-total clearfix"
                      >
                        <div data-v-3e76bb0a="" className="card-bet-total-l">
                          <span
                            data-v-3e76bb0a=""
                            style={{ fontSize: "0.9rem" }}
                          >
                            Point
                          </span>
                          <span data-v-3e76bb0a="">100</span>
                        </div>
                        <div data-v-3e76bb0a="" className="card-bet-total-r">
                          Recharge
                        </div>
                      </div>
                      <div data-v-3e76bb0a="" className="card-bet-base">
                        <p
                          data-v-3e76bb0a=""
                          className="card-bet-p"
                          style={{ fontSize: "0.9rem" }}
                        >
                          Contract Point
                        </p>
                        <div data-v-3e76bb0a="" className="card-bet-base-num">
                          <div data-v-3e76bb0a="" className="basicAmount">
                            10
                          </div>
                          <div data-v-3e76bb0a="" className="basicAmount1">
                            100
                          </div>
                          <div data-v-3e76bb0a="" className="basicAmount2">
                            1000
                          </div>
                          <div data-v-3e76bb0a="" className="basicAmount3">
                            10000
                          </div>
                        </div>
                      </div>
                      <div data-v-3e76bb0a="" className="card-bet-act">
                        <div
                          data-v-3e76bb0a=""
                          className="card-bet-p"
                          style={{ fontSize: "0.9rem" }}
                        >
                          Number
                        </div>
                        <div data-v-3e76bb0a="" className="card-bet-act-num">
                          <span
                            data-v-3e76bb0a=""
                            style={{ fontSize: "1.4rem" }}
                          >
                            - 5
                          </span>
                          <span
                            data-v-3e76bb0a=""
                            style={{ fontSize: "1.4rem" }}
                          >
                            - 1
                          </span>
                          <i data-v-3e76bb0a="">1</i>
                          <span
                            data-v-3e76bb0a=""
                            style={{ fontSize: "1.4rem" }}
                          >
                            + 1
                          </span>
                          <span
                            data-v-3e76bb0a=""
                            style={{ fontSize: "1.4rem" }}
                          >
                            + 5
                          </span>
                        </div>
                      </div>
                      <div data-v-3e76bb0a="" className="card-bet-bill">
                        <p data-v-3e76bb0a="">
                          <span data-v-3e76bb0a="">Delivery:</span>
                          <span data-v-3e76bb0a="">97</span>
                        </p>
                        <p data-v-3e76bb0a="">
                          <span data-v-3e76bb0a="">Fee:</span>
                          <span data-v-3e76bb0a="">3</span>
                        </p>
                        <p data-v-3e76bb0a="">
                          <span data-v-3e76bb0a="">Amount:</span>
                          <span data-v-3e76bb0a="">100</span>
                        </p>
                      </div>
                      <div data-v-3e76bb0a="" className="card-bet-bot">
                        <button
                          data-v-3e76bb0a=""
                          type="button"
                          className="card-bet-bot-button"
                          style={{ fontSize: "1.2rem" }}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-11837e31="" className="pokerRecord">
                Record
              </div>
              <div data-v-11837e31="" className="pokerRecord-content">
                <div data-v-11837e31="" className="pokerRecord-content-top">
                  {" "}
                  Andar Bahar Records{" "}
                </div>
                <Link to="/andarbaharrecords">
                  <div data-v-11837e31="" className="pokerRecord-content-top2">
                    {" "}
                    more &gt;{" "}
                  </div>
                </Link>
                <div data-v-11837e31="" className="pokerRecord-content-record">
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      317
                    </div>
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result3">
                      T
                    </div>
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      316
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      315
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      314
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      313
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      312
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      311
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      310
                    </div>
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result3">
                      T
                    </div>
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      309
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      308
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      307
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      306
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      305
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      304
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      303
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      302
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      301
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      300
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      299
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      298
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      297
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      296
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      295
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      294
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      293
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      292
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      291
                    </div>
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result3">
                      T
                    </div>
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      290
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      289
                    </div>
                    {/**/}
                    {/**/}
                    <div data-v-11837e31="" className="pokerRecord-result4">
                      B
                    </div>
                  </div>
                  <div data-v-11837e31="" className="pokerRecord-result">
                    <div data-v-11837e31="" className="pokerRecord-result1">
                      288
                    </div>
                    <div data-v-11837e31="" className="pokerRecord-result2">
                      A
                    </div>
                    {/**/}
                    {/**/}
                  </div>
                </div>
              </div>
              <div data-v-11837e31="" className="MyOrder">
                My Order
              </div>
              <div data-v-11837e31="" className="MyOrder-record">
                <div data-v-11837e31="" className="MyOrder-recordmore">
                  {" "}
                  more &gt;{" "}
                </div>
                <div data-v-11837e31="" className="MyOrder-records">
                  <div data-v-11837e31="" className="MyOrder-record-top">
                    <div data-v-11837e31="" className="MyOrdertop1">
                      Period
                    </div>
                    <div data-v-11837e31="" className="MyOrdertop2">
                      Order
                    </div>
                    <div data-v-11837e31="" className="MyOrdertop3">
                      Buy
                    </div>
                    <div data-v-11837e31="" className="MyOrdertop4">
                      Result
                    </div>
                    <div data-v-11837e31="" className="MyOrdertop5">
                      Profit
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-11837e31="" className="MyOrderfoot" />
              {/**/}
            </div>
          </div>
        </div>
      </span>
      {select && (
        <Fastparityform
          selected={select}
          walletAmount={walletAmount}
          setselected={setselect}
          formDarkMode={formDarkMode}
          color={color}
        />
      )}
    </div>
  );
}

export default AndarBahar;
