import React from "react";
import "../App.css";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlinePlusSquare,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineMessage as AiOutlineComment,
  AiOutlineEllipsis,
} from "react-icons/ai";

import yarnOatmeal from "../assets/yarn_oatmeal_wool.jpg";
import yarnPastel from "../assets/yarn_pastel_cotton.jpg";
import yarnSilk from "../assets/yarn_silk_mohair.jpg";
import yarnSparkle from "../assets/yarn_sparkle_scrubby.jpg";

export default function Feed() {
  const feedPosts = [
    {
      id: 1,
      user: "포근뜨개",
      userId: "@warm_knitting",
      content:
        "오늘 들어온 오트밀 베이지 울사예요. 촉감이 너무 부드러워서 목도리 뜨기에 딱입니다! 🧶",
      img: yarnOatmeal,
      likes: 58,
      comments: 12,
      date: "2026년 3월 11일",
    },
    {
      id: 2,
      user: "한땀공방",
      userId: "@hand_made",
      content:
        "파스텔 믹스 코튼 실로 수세미를 떠봤는데 색감이 미쳤어요... 소장 가치 100%! 알약마켓에서 한정 수량으로 공유합니다. 💊",
      img: yarnPastel,
      likes: 42,
      comments: 5,
      date: "2026년 3월 10일",
    },
    {
      id: 3,
      user: "블루니팅",
      userId: "@blue_yarn",
      content:
        "실크 모헤어 블루 컬러 입고 완료! 은은한 광택이 도는 게 정말 고급스러워요. 가디건 뜨면 정말 예쁠 것 같지 않나요? 😍",
      img: yarnSilk,
      likes: 89,
      comments: 24,
      date: "2026년 3월 9일",
    },
    {
      id: 4,
      user: "반짝이네",
      userId: "@sparkle_knit",
      content:
        "까칠까칠하지만 중독성 있는 수세미용 반짝이실! 이번에 신상 컬러들이 대거 추가되었습니다. 주방 분위기를 바꿔보세요! ✨",
      img: yarnSparkle,
      likes: 31,
      comments: 7,
      date: "2026년 3월 8일",
    },
  ];

  return (
    <div className="feed-page">
      <header className="feed-header">
        <h2 className="header-title">알약마켓 피드</h2>
        <AiOutlineSearch className="header-icon" />
      </header>

      <main className="feed-content">
        {feedPosts.map((post) => (
          <article key={post.id} className="feed-post">
            <div className="post-header">
              <div className="user-info">
                <div className="user-profile-img">💊</div>
                <div className="user-name-group">
                  <span className="user-name">{post.user}</span>
                  <span className="user-id">{post.userId}</span>
                </div>
              </div>
              <AiOutlineEllipsis className="more-icon" />
            </div>

            <div className="post-text">{post.content}</div>

            <div className="post-image-container">
              <img src={post.img} alt="뜨개질 포스트" className="post-image" />
            </div>

            <div className="post-footer">
              <div className="reaction-icons">
                <div className="icon-group">
                  <AiOutlineHeart className="footer-icon" />{" "}
                  <span>{post.likes}</span>
                </div>
                <div className="icon-group">
                  <AiOutlineComment className="footer-icon" />{" "}
                  <span>{post.comments}</span>
                </div>
              </div>
              <span className="post-date">{post.date}</span>
            </div>
          </article>
        ))}
      </main>

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
