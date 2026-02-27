import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      {/* 다운로드하신 로고 이미지를 src/assets에 넣고 아래 경로를 수정하세요 */}
      <img
        src="/assets/logo.png"
        alt="알약마켓 로고"
        style={{ width: "120px" }}
      />

      <h1
        style={{
          color: "var(--main-green)",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        알약마켓
      </h1>

      <div
        style={{
          position: "absolute",
          bottom: "50px",
          width: "100%",
          padding: "0 20px",
        }}
      >
        <button
          onClick={() => navigate("/signup")}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "var(--main-green)",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          알약마켓 시작하기
        </button>
      </div>
    </div>
  );
}
