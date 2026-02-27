import React from "react";
import "../App.css";

export default function Signup() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "20px", marginBottom: "30px", marginTop: "40px" }}>
        이메일로 회원가입
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <label style={{ fontSize: "14px", color: "var(--gray-text)" }}>
          이메일
        </label>
        <input
          type="email"
          placeholder="이메일 주소를 입력해 주세요."
          style={{
            padding: "12px 0",
            border: "none",
            borderBottom: "1px solid #dbdbdb",
            outline: "none",
            fontSize: "16px",
          }}
        />

        <label
          style={{
            fontSize: "14px",
            color: "var(--gray-text)",
            marginTop: "10px",
          }}
        >
          비밀번호
        </label>
        <input
          type="password"
          placeholder="비밀번호를 설정해 주세요."
          style={{
            padding: "12px 0",
            border: "none",
            borderBottom: "1px solid #dbdbdb",
            outline: "none",
            fontSize: "16px",
          }}
        />

        <button
          style={{
            marginTop: "40px",
            padding: "15px",
            borderRadius: "30px",
            backgroundColor: "#dbdbdb",
            color: "white",
            border: "none",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
}
