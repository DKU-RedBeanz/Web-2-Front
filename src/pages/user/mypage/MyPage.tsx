import { useNavigate } from 'react-router-dom';
import './MyPage.css';

export default function MyPage() {
  const navigate = useNavigate();

  // 임시 사용자 정보 (추후 서버 연동)
  const user = {
    nickname: '맛집탐험가',
    school: '단국대학교',
    introduction: '맛있는 음식과 함께하는 대학생활!',
    reviewCount: 12,
    favoriteCount: 8,
  };

  // 로그아웃 (추후 로그인 기능 연동)
  const handleLogout = () => {
    alert('로그아웃 기능은 추후 연결됩니다.');
  };

  return (
    <div className="mypage">
      {/* 상단 헤더 */}
      <header className="mypage-header">
        <h1>마이페이지</h1>
      </header>

      <main className="mypage-content">
        {/* 프로필 영역 */}
        <section className="mypage-profile">
          <div className="mypage-profile-top">
            <div className="mypage-avatar">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
              </svg>
            </div>

            <div className="mypage-profile-info">
              <h2>{user.nickname}</h2>
              <p>{user.school}</p>
            </div>

            <button
              type="button"
              className="mypage-edit-button"
              onClick={() => navigate('/mypage/edit')}
            >
              내 정보 수정
            </button>
          </div>

          <p className="mypage-introduction">
            {user.introduction}
          </p>
        </section>

        {/* 활동 정보 */}
        <section className="mypage-stats">
          <button
            type="button"
            className="mypage-stat"
            onClick={() => navigate('/mypage/reviews')}
          >
            <span className="mypage-stat-count">
              {user.reviewCount}
            </span>
            <span className="mypage-stat-label">
              작성한 리뷰
            </span>
          </button>

          <div className="mypage-stat-divider" />

          <button
            type="button"
            className="mypage-stat"
            onClick={() => navigate('/mypage/favorites')}
          >
            <span className="mypage-stat-count">
              {user.favoriteCount}
            </span>
            <span className="mypage-stat-label">
              찜한 맛집
            </span>
          </button>
        </section>

        {/* 메뉴 목록 */}
        <section className="mypage-menu">
          <button
            type="button"
            className="mypage-menu-item"
            onClick={() => navigate('/mypage/edit')}
          >
            <span>내 정보 수정</span>
            <span className="mypage-chevron">›</span>
          </button>

          <button
            type="button"
            className="mypage-menu-item"
            onClick={() => navigate('/mypage/reviews')}
          >
            <span>내 리뷰</span>
            <span className="mypage-chevron">›</span>
          </button>

          <button
            type="button"
            className="mypage-menu-item"
            onClick={() => navigate('/mypage/favorites')}
          >
            <span>찜한 맛집</span>
            <span className="mypage-chevron">›</span>
          </button>
        </section>

        {/* 로그아웃 */}
        <button
          type="button"
          className="mypage-logout"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </main>
    </div>
  );
}