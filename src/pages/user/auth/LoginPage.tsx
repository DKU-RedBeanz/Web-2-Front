import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  // 입력한 아이디와 비밀번호를 저장
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼을 눌렀을 때 실행
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 실제 로그인 API 연결 전 임시 처리
    console.log('아이디:', id);
    console.log('비밀번호 입력 여부:', password.length > 0);
  };

  return (
    <div className="login-page">
      {/* 상단 뒤로가기 */}
      <header className="login-header">
        <button
          type="button"
          className="login-back"
          onClick={() => window.history.back()}
          aria-label="뒤로가기"
        >
          ‹
        </button>
        <span>로그인</span>
      </header>

      <main className="login-content">
        {/* 로고 및 서비스 소개 */}
        <div className="login-brand">
          <div className="login-logo">🍴</div>
          <h1>캠퍼스 한입</h1>
          <p>우리 학교 맛집, 한눈에 찾아보세요.</p>
        </div>

        {/* 로그인 입력 폼 */}
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="login-id">아이디</label>
          <input
            id="login-id"
            type="text"
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />

          <label htmlFor="login-password">비밀번호</label>
          <input
            id="login-password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-submit">
            로그인
          </button>
        </form>

        {/* 회원가입 및 계정 찾기 */}
        <div className="login-links">
          <span>아직 계정이 없으신가요?</span>
          <Link to="/signup">회원가입</Link>
        </div>
      </main>
    </div>
  );
}