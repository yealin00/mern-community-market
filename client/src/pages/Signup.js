export default function Signup() {
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>📝 회원가입</h2>
      <input
        type="text"
        placeholder="아이디"
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button
        style={{
          width: "100%",
          padding: "10px",
          background: "#4CAF50",
          color: "white",
          border: "none",
        }}
      >
        가입하기
      </button>
    </div>
  );
}
