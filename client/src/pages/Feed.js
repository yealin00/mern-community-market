import React from "react";
import "../App.css";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusSquare,
  AiOutlineUser,
} from "react-icons/ai";

// 1. src/assets 폴더에서 이미지를 직접 import 합니다.
import yarnOatmeal from "../assets/yarn_oatmeal_wool.jpg";
import yarnPastel from "../assets/yarn_pastel_cotton.jpg";
import yarnSilk from "../assets/yarn_silk_mohair.jpg";
import yarnSparkle from "../assets/yarn_sparkle_scrubby.jpg";

export default function Feed() {
  // 2. import한 변수명을 데이터에 매칭합니다.
  const knittingFeeds = [
    {
      id: 1,
      title: "오트밀 베이지 울사",
      price: "12,000원",
      author: "포근뜨개",
      img: yarnOatmeal,
    },
    {
      id: 2,
      title: "파스텔 믹스 코튼",
      price: "8,500원",
      author: "한땀공방",
      img: yarnPastel,
    },
    {
      id: 3,
      title: "실크 모헤어 블루",
      price: "15,000원",
      author: "블루니팅",
      img: yarnSilk,
    },
    {
      id: 4,
      title: "수세미용 반짝이실",
      price: "3,000원",
      author: "반짝이네",
      img: yarnSparkle,
    },
  ];

  return (
    <div className="feed-page">
      <header className="feed-header">
        <h2 className="header-title">알약마켓 피드</h2>
        <AiOutlineSearch className="header-icon" />
      </header>

      <main className="feed-content">
        {/* 심플한 검색창 영역 */}
        <div className="search-section">
          <div className="search-bar">
            <AiOutlineSearch className="search-bar-icon" />
            <input type="text" placeholder="검색어를 입력해주세요." />
          </div>
        </div>

        {/* 뜨개질 실 그리드 */}
        <div className="knitting-grid">
          {knittingFeeds.map((item) => (
            <div key={item.id} className="yarn-card">
              <div className="yarn-img-box">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="yarn-info">
                <span className="yarn-author">{item.author}</span>
                <h3 className="yarn-title">{item.title}</h3>
                <p className="yarn-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <footer className="bottom-nav">
        <div className="nav-item active">
          <AiOutlineHome />
          <span>홈</span>
        </div>
        <div className="nav-item">
          <AiOutlineMessage />
          <span>채팅</span>
        </div>
        <div className="nav-item">
          <AiOutlinePlusSquare />
          <span>게시물 작성</span>
        </div>
        <div className="nav-item">
          <AiOutlineUser />
          <span>프로필</span>
        </div>
      </footer>
    </div>
  );
}
