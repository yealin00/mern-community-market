import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoFull from "../assets/logo-full.png"; // 글자 포함 로고
import logoSymbol from "../assets/logo-symbol.png"; // 글자 없는 캐릭터만
import "../App.css";

export default function Main() {
  const [isSplash, setIsSplash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 3초 후 로그인 화면으로 전환
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`main-container ${isSplash ? "bg-white" : "bg-green"}`}>
      {/* 상단: 상태에 따라 로고 이미지와 위치가 변함 */}
      <div className={`top-section ${isSplash ? "splash-mode" : "login-mode"}`}>
        <img
          src={isSplash ? logoFull : logoSymbol}
          alt="알약마켓"
          className="main-logo"
        />
      </div>

      {/* 하단: 3초 뒤에 길게 스크롤되는 로그인 폼 등장 */}
      <div className={`bottom-section ${isSplash ? "hidden" : "visible"}`}>
        {!isSplash && (
          <div className="login-form">
            <h2>로그인</h2>

            <div className="input-group">
              <label>이메일</label>
              <input type="email" placeholder="이메일을 입력하세요." />
            </div>

            <div className="input-group">
              <label>비밀번호</label>
              <input type="password" placeholder="비밀번호를 입력하세요." />
            </div>

            <button className="login-btn">로그인</button>

            <p className="signup-link" onClick={() => navigate("/signup")}>
              이메일로 회원가입
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
