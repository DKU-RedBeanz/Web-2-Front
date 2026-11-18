import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EditProfilePage.css';

export default function EditProfilePage() {
  const navigate = useNavigate();

  // 임시 사용자 정보
  const [nickname, setNickname] = useState('맛집탐험가');
  const [introduction, setIntroduction] = useState(
    '맛있는 음식과 함께하는 대학생활!'
  );
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 저장 버튼
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nickname.trim()) {
      alert('닉네임을 입력해주세요.');
      return;
    }

    if (password || confirmPassword) {
      if (password.length < 8) {
        alert('비밀번호는 8자 이상 입력해주세요.');
        return;
      }

      if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
    }

    // 실제 저장 기능은 백엔드 연결 후 구현
    alert('저장 기능은 추후 서버와 연결됩니다.');
  };

  return (
    <div className="edit-profile-page">
      {/* 상단 헤더 */}
      <header className="edit-profile-header">
        <button
          type="button"
          onClick={() => navigate('/mypage')}
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

        <span>내 정보 수정</span>

        {/* 닫기 버튼 */}
        <button
          type="button"
          className="edit-profile-close"
          onClick={() => navigate('/mypage')}
          aria-label="닫기"
        >
          ×
        </button>
      </header>

      <main className="edit-profile-content">
        {/* 프로필 사진 */}
        <div className="edit-profile-avatar-section">
          <div className="edit-profile-avatar">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
            </svg>
          </div>
          <span>프로필 사진</span>
        </div>

        {/* 정보 수정 폼 */}
        <form className="edit-profile-form" onSubmit={handleSave}>
          <label htmlFor="edit-nickname">닉네임</label>
          <input
            id="edit-nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력해주세요"
            maxLength={20}
            required
          />

          <label htmlFor="edit-introduction">자기소개</label>
          <textarea
            id="edit-introduction"
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
            placeholder="자기소개를 입력해주세요"
            maxLength={150}
            rows={4}
          />
          <p className="edit-profile-count">
            {introduction.length}/150
          </p>

          {/* 학교 정보 */}
          <label htmlFor="edit-school">학교</label>
          <input
            id="edit-school"
            type="text"
            value="단국대학교"
            disabled
          />

          {/* 비밀번호 변경 */}
          <h2 className="edit-profile-section-title">
            비밀번호 변경
          </h2>

          <label htmlFor="edit-password">새 비밀번호</label>
          <input
            id="edit-password"
            type="password"
            placeholder="변경할 비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="edit-confirm">새 비밀번호 확인</label>
          <input
            id="edit-confirm"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="edit-profile-submit" type="submit">
            저장하기
          </button>
        </form>
      </main>
    </div>
  );
}