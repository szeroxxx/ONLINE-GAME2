import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="dashboard_container">
      <div className="dashboard_header">
        <h1 style={{ fontSize: 22, fontWeight: "bold" }}>Win99x</h1>
      </div>
      <div className="top_heading">
        <h1 style={{ fontSize: 16, fontWeight: "bold" }}>#WINBIG</h1>
        <h1 style={{ fontSize: 30, fontWeight: "bold" }}>Play Small Game</h1>
        <h1 style={{ fontSize: 16, fontWeight: "bold" }}>SATRT EARNING</h1>
        <div className="top_img">
          <img src="assets/boy-removebg-preview.png" />
        </div>
      </div>
      <div className="dashgames">
        <div className="dashgame_fast_parity">
          <img src="assets/fast-parity-removebg-preview.png" alt="" />
        </div>
        <div className="dashgame_ander_bahar">
          <img src="assets/AnB-removebg-preview.png" alt="" />
        </div>

        <div className="dashgame_wheel">
          <img src="assets/wheel-removebg-preview.png" alt="" />
        </div>
      </div>
      <div className="reviews_rating">
        <div className="user_rating">
          <p style={{ fontSize: 19, fontWeight: "bold", textAlign: "center" }}>
            4.7
          </p>
          <img src="assets/rating.jpeg" className="rating_img" />
          <div style={{ marginLeft: 28 }}>
            <p style={{ fontWeight: "bold" }}>4.7 out of 5</p>
            <p style={{ fontWeight: "bold" }}>USER RATING</p>
          </div>
        </div>

        <div className="user_rating">
          <div className="total_uses_icon">
            <img src="assets/home-icon.jpeg" className="total_user_img" />
          </div>

          <div style={{ marginLeft: 28 }}>
            <p style={{ fontWeight: "bold" }}>50,000+</p>
            <p style={{ fontWeight: "bold" }}>TOTAL USERS</p>
          </div>
        </div>
        <div className="user_rating">
          <div className="rupee_icon">
            <p style={{ fontWeight: "bold" }}>₹</p>
          </div>

          <div style={{ marginLeft: 28 }}>
            <p style={{ fontWeight: "bold" }}>₹ 21 LAKHS+</p>
            <p style={{ fontWeight: "bold" }}>PRIZES WON</p>
          </div>
        </div>
      </div>

      <p className="review_rating_text">
        Reviews &{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>Rating</span>{" "}
      </p>

      <input style={{ marginLeft: 180 }} type="radio" name="position" checked />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input type="radio" name="position" />
      <input type="radio" name="position" />

      <main id="carousel">
        <div class="item">
          <div className="people_review">
            <div className="review_top">
              <div className="user_profile">
                <img src="./assets/profile_image_2.png" />
              </div>
              <p style={{ fontWeight: "bold", marginRight: 90 }}>Ajay Kumar</p>
            </div>
            <div className="review_head">
              <p style={{ fontWeight: "bold", marginTop: 5 }}>
                Live Parity Winner
              </p>
              <div>
                <p style={{ color: "yellow" }}>₹ 2.5 Lakhs </p>
                <p>Winner</p>
              </div>
            </div>
            <p className="review_text">
              I've been playing on Dream11 since 2017 it's truly my cricket
              knowledge that has helped me gain this achievement and empowered
              me to be capable in society.it's due to my skills that I've won.{" "}
            </p>
          </div>
        </div>
        <div class="item">
          <div className="people_review">
            <div className="review_top">
              <div className="user_profile">
                <img src="./assets/profile_image_2.png" />
              </div>
              <p style={{ fontWeight: "bold", marginRight: 90 }}>
                chirag khatik
              </p>
            </div>
            <div className="review_head">
              <p style={{ fontWeight: "bold", marginTop: 5 }}>
                Live Parity Winner
              </p>
              <div>
                <p style={{ color: "yellow" }}>₹ 2.5 Lakhs </p>
                <p>Winner</p>
              </div>
            </div>
            <p className="review_text">
              I've been playing on Dream11 since 2017 it's truly my cricket
              knowledge that has helped me gain this achievement and empowered
              me to be capable in society.it's due to my skills that I've won.{" "}
            </p>
          </div>
        </div>
        <div class="item">
          <div className="people_review">
            <div className="review_top">
              <div className="user_profile">
                <img src="./assets/profile_image_2.png" />
              </div>
              <p style={{ fontWeight: "bold", marginRight: 90 }}>
                bharat singh
              </p>
            </div>
            <div className="review_head">
              <p style={{ fontWeight: "bold", marginTop: 5 }}>
                Live Parity Winner
              </p>
              <div>
                <p style={{ color: "yellow" }}>₹ 2.5 Lakhs </p>
                <p>Winner</p>
              </div>
            </div>
            <p className="review_text">
              I've been playing on Dream11 since 2017 it's truly my cricket
              knowledge that has helped me gain this achievement and empowered
              me to be capable in society.it's due to my skills that I've won.{" "}
            </p>
          </div>
        </div>
        <div class="item">
          <div className="people_review">
            <div className="review_top">
              <div className="user_profile">
                <img src="./assets/profile_image_2.png" />
              </div>
              <p style={{ fontWeight: "bold", marginRight: 90 }}>vikas rao</p>
            </div>
            <div className="review_head">
              <p style={{ fontWeight: "bold", marginTop: 5 }}>
                Live Parity Winner
              </p>
              <div>
                <p style={{ color: "yellow" }}>₹ 2.5 Lakhs </p>
                <p>Winner</p>
              </div>
            </div>
            <p className="review_text">
              I've been playing on Dream11 since 2017 it's truly my cricket
              knowledge that has helped me gain this achievement and empowered
              me to be capable in society.it's due to my skills that I've won.{" "}
            </p>
          </div>
        </div>
        <div class="item">
          <div className="people_review">
            <div className="review_top">
              <div className="user_profile">
                <img src="./assets/profile_image_2.png" />
              </div>
              <p style={{ fontWeight: "bold", marginRight: 90 }}>
                naresh kumar
              </p>
            </div>
            <div className="review_head">
              <p style={{ fontWeight: "bold", marginTop: 5 }}>
                Live Parity Winner
              </p>
              <div>
                <p style={{ color: "yellow" }}>₹ 2.5 Lakhs </p>
                <p>Winner</p>
              </div>
            </div>
            <p className="review_text">
              I've been playing on Dream11 since 2017 it's truly my cricket
              knowledge that has helped me gain this achievement and empowered
              me to be capable in society.it's due to my skills that I've won.{" "}
            </p>
          </div>
        </div>
      </main>

      <div className="app_rating">
        <p style={{ fontWeight: "bold" }}>App Rating</p>
        <img src="assets/rating-star.jpeg" className="rating_star_img" />
        <p style={{ fontWeight: "bold" }}>
          4.7 <span> </span>|{" "}
          <span style={{ marginLeft: 10, fontWeight: "bold" }}>50,000</span>
        </p>
      </div>
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
        FAQs
      </p>
      <div style={{ marginTop: 30 }} className="questions_answers">
        <div className="question">
          <p>How to play this game</p>
          <img src="assets/down-arrow.jpeg" />
        </div>
        <div className="question">
          <p>Is it safe add money to this game</p>
          <img src="assets/down-arrow.jpeg" />
        </div>
        <div className="question">
          <p>When do I get my winnings?</p>
          <img src="assets/down-arrow.jpeg" />
        </div>
        <div className="question">
          <p>How should I download the app</p>
          <img src="assets/down-arrow.jpeg" />
        </div>
      </div>
      <div className="home_footer">
        <p>Powered By</p>
        <img src="assets/Paytm-Logo.png" />
      </div>
      <div className="login_download">
        <Link
          to={"/login"}
          className="home_buttons"
          style={{ padding: "7px 73px" }}
        >
          <p>LOGIN</p>
        </Link>
        <Link to={"/appdownload"} className="home_buttons">
          <p>DOWNLOAD</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
