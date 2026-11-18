import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ResetPasswordPage.css';

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  // 입력값 관리
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 인증번호 발송 (추후 API 연결)
  const sendCode = () => {
    if (!userId.trim() || !email.trim()) {
      alert('아이디와 이메일을 입력해주세요.');
      return;
    }

    alert('인증번호 발송 기능은 추후 연결됩니다.');
  };

  // 인증번호 확인 (추후 API 연결)
  const verifyCode = () => {
    if (!verificationCode.trim()) {
      alert('인증번호를 입력해주세요.');
      return;
    }

    alert('인증번호 확인 기능은 추후 연결됩니다.');
  };

  // 비밀번호 재설정 (추후 API 연결)
  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !userId.trim() ||
      !email.trim() ||
      !verificationCode.trim() ||
      !newPassword ||
      !confirmPassword
    ) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (newPassword.length < 8) {
      alert('비밀번호는 8자 이상 입력해주세요.');
      return;
    }

    // 실제 API 연동 전에는 비밀번호를 변경하지 않음
    alert('비밀번호 재설정 기능은 추후 서버와 연결됩니다.');
  };

  return (
    <div className="reset-page">
      {/* 상단 헤더 */}
      <header className="reset-header">
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
        <span>비밀번호 재설정</span>
      </header>

      <main className="reset-content">
        <h1>비밀번호를 잊으셨나요?</h1>
        <p className="reset-description">
          가입 시 등록한 정보를 입력하고
          <br />
          새로운 비밀번호를 설정해주세요.
        </p>

        <form className="reset-form" onSubmit={handleResetPassword}>
          {/* 아이디 */}
          <label htmlFor="reset-id">아이디</label>
          <input
            id="reset-id"
            type="text"
            placeholder="가입한 아이디를 입력해주세요"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          {/* 이메일 */}
          <label htmlFor="reset-email">이메일</label>
          <div className="reset-input-row">
            <input
              id="reset-email"
              type="email"
              placeholder="가입한 이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="button" onClick={sendCode}>
              인증번호 발송
            </button>
          </div>

          {/* 인증번호 */}
          <label htmlFor="reset-code">인증번호</label>
          <div className="reset-input-row">
            <input
              id="reset-code"
              type="text"
              placeholder="인증번호를 입력해주세요"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <button type="button" onClick={verifyCode}>
              인증확인
            </button>
          </div>

          {/* 새 비밀번호 */}
          <label htmlFor="reset-password">새 비밀번호</label>
          <input
            id="reset-password"
            type="password"
            placeholder="새 비밀번호를 입력해주세요"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          {/* 비밀번호 확인 */}
          <label htmlFor="reset-confirm">새 비밀번호 확인</label>
          <input
            id="reset-confirm"
            type="password"
            placeholder="새 비밀번호를 다시 입력해주세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {/* 재설정 버튼 */}
          <button className="reset-submit" type="submit">
            비밀번호 재설정
          </button>
        </form>

        <div className="reset-login-link">
          비밀번호가 기억나셨나요?
          <Link to="/login">로그인</Link>
        </div>
      </main>
    </div>
  );
}