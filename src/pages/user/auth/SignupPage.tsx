import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css';

export default function SignupPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [school, setSchool] = useState('');
  const [agreed, setAgreed] = useState(false);

  // 아이디 중복확인 (추후 API 연결)
  const checkId = () => {
    if (!userId.trim()) {
      alert('아이디를 입력해주세요.');
      return;
    }
    alert('아이디 중복확인 기능은 추후 연결됩니다.');
  };

  // 이메일 인증번호 발송 (추후 API 연결)
  const sendEmailCode = () => {
    if (!email.trim()) {
      alert('이메일을 입력해주세요.');
      return;
    }
    alert('이메일 인증번호 발송 기능은 추후 연결됩니다.');
  };

  // 이메일 인증번호 확인 (추후 API 연결)
  const checkEmailCode = () => {
    if (!verificationCode.trim()) {
      alert('인증번호를 입력해주세요.');
      return;
    }
    alert('이메일 인증 확인 기능은 추후 연결됩니다.');
  };

  // 회원가입 버튼
  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !userId.trim() ||
      !password ||
      !passwordConfirm ||
      !nickname.trim() ||
      !email.trim() ||
      !verificationCode.trim() ||
      !school
    ) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!agreed) {
      alert('이용약관에 동의해주세요.');
      return;
    }

    // 실제 회원가입 API가 연결되기 전에는 가입 처리하지 않음
    alert('회원가입 기능은 추후 서버와 연결됩니다.');
  };

  return (
    <div className="signup-page">
      <header className="signup-header">
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
        <span>회원가입</span>
      </header>

      <main className="signup-content">
        <h1>환영합니다!</h1>
        <p className="signup-description">
          가입하고 우리 학교 맛집 정보를 알아보세요.
        </p>

        <form className="signup-form" onSubmit={handleSignup}>
          {/* 아이디 */}
          <label htmlFor="signup-id">아이디</label>
          <div className="signup-input-row">
            <input
              id="signup-id"
              type="text"
              placeholder="아이디를 입력"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
            <button type="button" onClick={checkId}>
              중복확인
            </button>
          </div>

          {/* 비밀번호 */}
          <label htmlFor="signup-password">비밀번호</label>
          <input
            id="signup-password"
            type="password"
            placeholder="비밀번호를 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* 비밀번호 확인 */}
          <label htmlFor="signup-confirm">비밀번호 확인</label>
          <input
            id="signup-confirm"
            type="password"
            placeholder="비밀번호 다시 입력"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />

          {/* 닉네임 */}
          <label htmlFor="signup-nickname">닉네임</label>
          <input
            id="signup-nickname"
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />

          {/* 이메일 */}
          <label htmlFor="signup-email">이메일</label>
          <div className="signup-input-row">
            <input
              id="signup-email"
              type="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="button" onClick={sendEmailCode}>
              인증번호 발송
            </button>
          </div>

          {/* 이메일 인증번호 */}
          <label htmlFor="signup-code">인증번호</label>
          <div className="signup-input-row">
            <input
              id="signup-code"
              type="text"
              placeholder="인증번호를 입력해주세요"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <button type="button" onClick={checkEmailCode}>
              인증확인
            </button>
          </div>

          {/* 학교 선택 */}
          <label htmlFor="signup-school">학교 선택</label>
          <select
            id="signup-school"
            className="signup-select"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          >
            <option value="">학교를 선택해주세요</option>
            <option value="단국대학교">단국대학교</option>
          </select>

          {/* 약관 동의 */}
          <label className="signup-agreement">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <span>이용약관 및 개인정보 처리방침 동의 (필수)</span>
          </label>

          {/* 회원가입 */}
          <button className="signup-submit" type="submit">
            가입하기
          </button>
        </form>

        <div className="signup-login-link">
          이미 계정이 있으신가요?
          <Link to="/login">로그인</Link>
        </div>
      </main>
    </div>
  );
}