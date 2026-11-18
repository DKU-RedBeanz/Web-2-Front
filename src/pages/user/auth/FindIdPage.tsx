import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FindIdPage.css';

export default function FindIdPage() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  // 아이디 찾기 (추후 API 연결)
  const handleFindId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nickname.trim() || !email.trim()) {
      alert('닉네임과 이메일을 모두 입력해주세요.');
      return;
    }

    alert('아이디 찾기 기능은 추후 서버와 연결됩니다.');
  };

  return (
    <div className="find-id-page">
      {/* 상단 헤더 */}
      <header className="find-id-header">
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span>아이디 찾기</span>
      </header>

      {/* 본문 */}
      <main className="find-id-content">
        <h1>아이디를 잊으셨나요?</h1>
        <p className="find-id-description">
          가입 시 등록한 닉네임과 이메일을
          <br />
          입력해주세요.
        </p>

        <form className="find-id-form" onSubmit={handleFindId}>
          {/* 닉네임 */}
          <label htmlFor="find-nickname">닉네임</label>
          <input
            id="find-nickname"
            type="text"
            placeholder="가입 시 등록한 닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />

          {/* 이메일 */}
          <label htmlFor="find-email">이메일</label>
          <input
            id="find-email"
            type="email"
            placeholder="가입 시 등록한 이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* 아이디 찾기 버튼 */}
          <button className="find-id-submit" type="submit">
            아이디 찾기
          </button>
        </form>

        {/* 로그인 이동 */}
        <div className="find-id-login">
          아이디가 기억나셨나요?
          <Link to="/login">로그인</Link>
        </div>
      </main>
    </div>
  );
}