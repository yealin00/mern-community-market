import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoFull from "../assets/logo-full.png";
import logoSymbol from "../assets/logo-symbol.png";
import "../App.css";

export default function Main() {
  const [isSplash, setIsSplash] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    // 실제 서비스처럼 힌트 없이 내부 로직으로만 검증합니다.
    if (email === "admin" && password === "1234") {
      navigate("/feed"); // 성공 시 피드로 이동
    } else {
      alert("아이디 또는 비밀번호를 다시 확인해주세요.");
    }
  };

  return (
    <div className={`main-container ${isSplash ? "bg-white" : "bg-green"}`}>
      <div className={`top-section ${isSplash ? "splash-mode" : "login-mode"}`}>
        <img
          src={isSplash ? logoFull : logoSymbol}
          alt="알약마켓"
          className="main-logo"
        />
      </div>

      <div className={`bottom-section ${isSplash ? "hidden" : "visible"}`}>
        {!isSplash && (
          <div className="login-form">
            <h2>로그인</h2>
            <div className="input-group">
              <label>아이디</label>
              <input
                type="email"
                placeholder="아이디를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login-btn" onClick={handleLogin}>
              로그인
            </button>
            <p className="signup-link" onClick={() => navigate("/signup")}>
              이메일로 회원가입
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
