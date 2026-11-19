
import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Utensils,
  Eye,
  EyeOff,
  LogIn,
} from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();

  // 아이디와 비밀번호 입력값 관리
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // 비밀번호 표시 여부
  const [showPassword, setShowPassword] = useState(false);

  // 로그인 처리 (추후 API 연결)
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userId.trim() || !password.trim()) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    // 실제 로그인 기능은 백엔드 연동 후 구현
    alert('로그인 기능은 추후 서버와 연결됩니다.');
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F8FA] text-[#222222]">

      {/* 상단 헤더 */}
      <header className="h-[52px] shrink-0 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-full w-full max-w-[390px] items-center gap-2 px-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="뒤로가기"
            className="flex h-8 w-8 items-center justify-center"
          >
            <ArrowLeft size={20} strokeWidth={1.8} />
          </button>

          <h1 className="text-[15px] font-bold">
            로그인
          </h1>
        </div>
      </header>

      {/* 본문 */}
      <main className="mx-auto w-full max-w-[390px] flex-1 px-4 pb-10">

        {/* 로고 및 서비스 소개 */}
        <section className="flex flex-col items-center pt-20 pb-16">

          {/* 로고 */}
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-[#1B2E52]">
            <Utensils
              size={28}
              strokeWidth={1.8}
              className="text-white"
            />
          </div>

          {/* 서비스 이름 */}
          <h2 className="mt-4 text-[20px] font-bold text-[#1B2E52]">
            캠퍼스 한입
          </h2>

          <p className="mt-2 text-[12px] text-gray-400">
            우리 학교 맛집, 한눈에 찾아보세요.
          </p>
        </section>

        {/* 로그인 폼 */}
        <form onSubmit={handleLogin} className="flex flex-col">

          {/* 아이디 */}
          <div className="mb-5">
            <label
              htmlFor="login-id"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              아이디
            </label>

            <input
              id="login-id"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디를 입력해주세요"
              autoComplete="username"
              required
              className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
            />
          </div>

          {/* 비밀번호 */}
          <div className="mb-6">
            <label
              htmlFor="login-password"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              비밀번호
            </label>

            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
                autoComplete="current-password"
                required
                className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 pr-11 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
              />

              {/* 비밀번호 표시 버튼 */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? '비밀번호 숨기기' : '비밀번호 보기'
                }
                className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center justify-center text-gray-400"
              >
                {showPassword ? (
                  <EyeOff size={18} strokeWidth={1.7} />
                ) : (
                  <Eye size={18} strokeWidth={1.7} />
                )}
              </button>
            </div>
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#1B2E52] text-[13px] font-semibold text-white"
          >
            <LogIn size={17} strokeWidth={1.8} />
            로그인
          </button>
        </form>

        {/* 아이디 찾기 / 비밀번호 재설정 */}
        <div className="mt-5 flex items-center justify-center gap-3 text-[11px] text-gray-500">
          <Link to="/find-id" className="hover:underline">
            아이디 찾기
          </Link>

          <span className="text-gray-300">|</span>

          <Link to="/reset-password" className="hover:underline">
            비밀번호 재설정
          </Link>
        </div>

        {/* 회원가입 */}
        <div className="mt-7 flex items-center justify-center gap-2 text-[12px]">
          <span className="text-gray-400">
            아직 계정이 없으신가요?
          </span>

          <Link
            to="/signup"
            className="font-semibold text-[#1B2E52] underline underline-offset-2"
          >
            회원가입
          </Link>
        </div>
      </main>
    </div>
  );
}
