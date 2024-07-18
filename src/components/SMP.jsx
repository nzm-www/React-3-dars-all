import React, { useState } from "react";
import logo from "../assets/react.svg";
import "../App.css";

function SMP() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  function Like() {
    setLike(like + 1);
  }
  function DisLike() {
    setDisLike(disLike + 1);
  }

  return (
    <div className="post">
      <div className="post-content">
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <div className="desc">
          <p>React - The library for web and native user interfaces</p>
        </div>
        <div className="reaction-btns">
          <div className="liked">
            <button onClick={() => Like()} className="buttonn">
              Like <i class="fa-solid fa-thumbs-up"></i>
            </button>
            <h4>{like}</h4>
          </div>
          <div className="disliked">
            <h4>{disLike}</h4>
            <button onClick={() => DisLike()} className="buttonn btndis">
              Dislike <i class="fa-solid fa-thumbs-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SMP;
