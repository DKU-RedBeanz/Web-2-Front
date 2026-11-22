
import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  KeyRound,
  Info,
} from 'lucide-react';

export default function ResetPasswordPage() {
  const navigate = useNavigate();

  // 사용자 입력값
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 비밀번호 표시 여부
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 인증번호 발송 (추후 API 연결)
  const sendCode = () => {
    if (!userId.trim() || !email.trim()) {
      alert('아이디와 이메일을 입력해주세요.');
      return;
    }

    alert('인증번호 발송 기능은 추후 서버와 연결됩니다.');
  };

  // 인증번호 확인 (추후 API 연결)
  const verifyCode = () => {
    if (!verificationCode.trim()) {
      alert('인증번호를 입력해주세요.');
      return;
    }

    alert('인증번호 확인 기능은 추후 서버와 연결됩니다.');
  };

  // 비밀번호 재설정 (추후 API 연결)
  const handleResetPassword = (e: FormEvent<HTMLFormElement>) => {
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

    if (newPassword.length < 8) {
      alert('새 비밀번호는 8자 이상 입력해주세요.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 인증 성공 여부와 비밀번호 변경은 서버에서 검증해야 함
    alert('비밀번호 재설정 기능은 추후 서버와 연결됩니다.');
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#222222]">

      {/* 상단 헤더 */}
      <header className="h-[52px] border-b border-gray-100 bg-white">
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
            비밀번호 재설정
          </h1>
        </div>
      </header>

      {/* 본문 */}
      <main className="mx-auto w-full max-w-[390px] px-4 pt-8 pb-12">

        {/* 페이지 제목 */}
        <section className="mb-8">
          <h2 className="text-[22px] font-bold text-[#1B2E52]">
            비밀번호를 잊으셨나요?
          </h2>

          <p className="mt-3 text-[12px] leading-5 text-gray-400">
            가입 시 등록한 정보를 입력하고
            <br />
            새로운 비밀번호를 설정해주세요.
          </p>
        </section>

        {/* 비밀번호 재설정 폼 */}
        <form
          onSubmit={handleResetPassword}
          className="flex flex-col"
        >

          {/* 아이디 */}
          <div className="mb-5">
            <label
              htmlFor="reset-id"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              아이디
            </label>

            <input
              id="reset-id"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="가입한 아이디를 입력해주세요"
              autoComplete="username"
              required
              className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
            />
          </div>

          {/* 이메일 */}
          <div className="mb-5">
            <label
              htmlFor="reset-email"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              이메일
            </label>

            <div className="flex gap-2">
              <div className="relative min-w-0 flex-1">
                <Mail
                  size={16}
                  strokeWidth={1.7}
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="reset-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="가입한 이메일 주소"
                  autoComplete="email"
                  required
                  className="h-11 w-full rounded-lg border border-gray-200 bg-white pr-3 pl-9 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
                />
              </div>

              <button
                type="button"
                onClick={sendCode}
                className="h-11 shrink-0 rounded-lg bg-[#E8EDF6] px-3 text-[11px] font-semibold text-[#1B2E52]"
              >
                인증번호 발송
              </button>
            </div>
          </div>

          {/* 인증번호 */}
          <div className="mb-6">
            <label
              htmlFor="reset-code"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              인증번호
            </label>

            <div className="flex gap-2">
              <input
                id="reset-code"
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="인증번호를 입력해주세요"
                required
                className="h-11 min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-3 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
              />

              <button
                type="button"
                onClick={verifyCode}
                className="h-11 shrink-0 rounded-lg bg-[#E8EDF6] px-3 text-[11px] font-semibold text-[#1B2E52]"
              >
                인증확인
              </button>
            </div>
          </div>

          {/* 구분선 */}
          <div className="mb-6 border-t border-gray-200" />

          {/* 새 비밀번호 안내 */}
          <div className="mb-5 flex items-center gap-2">
            <LockKeyhole
              size={19}
              strokeWidth={1.7}
              className="text-[#1B2E52]"
            />
            <h3 className="text-[14px] font-bold text-[#1B2E52]">
              새 비밀번호 설정
            </h3>
          </div>

          {/* 새 비밀번호 */}
          <div className="mb-5">
            <label
              htmlFor="reset-password"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              새 비밀번호
            </label>

            <div className="relative">
              <input
                id="reset-password"
                type={showPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="8자 이상 입력해주세요"
                autoComplete="new-password"
                minLength={8}
                required
                className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 pr-11 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
              />

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

          {/* 새 비밀번호 확인 */}
          <div className="mb-6">
            <label
              htmlFor="reset-confirm"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              새 비밀번호 확인
            </label>

            <div className="relative">
              <input
                id="reset-confirm"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="새 비밀번호를 다시 입력해주세요"
                autoComplete="new-password"
                required
                className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 pr-11 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                aria-label={
                  showConfirmPassword
                    ? '비밀번호 확인 숨기기'
                    : '비밀번호 확인 보기'
                }
                className="absolute top-1/2 right-3 flex -translate-y-1/2 items-center justify-center text-gray-400"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} strokeWidth={1.7} />
                ) : (
                  <Eye size={18} strokeWidth={1.7} />
                )}
              </button>
            </div>

            {/* 비밀번호 일치 확인 */}
            {confirmPassword && (
              <p
                className={`mt-2 text-[11px] ${
                  newPassword === confirmPassword
                    ? 'text-green-600'
                    : 'text-red-500'
                }`}
              >
                {newPassword === confirmPassword
                  ? '비밀번호가 일치합니다.'
                  : '비밀번호가 일치하지 않습니다.'}
              </p>
            )}
          </div>

          {/* 재설정 버튼 */}
          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#1B2E52] text-[13px] font-semibold text-white"
          >
            <KeyRound size={18} strokeWidth={1.8} />
            비밀번호 재설정
          </button>
        </form>

        {/* 로그인으로 이동 */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[12px]">
          <span className="text-gray-400">
            비밀번호가 기억나셨나요?
          </span>

          <Link
            to="/login"
            className="font-semibold text-[#1B2E52] underline underline-offset-2"
          >
            로그인
          </Link>
        </div>

        {/* 안내 메시지 */}
        <div className="mt-9 flex items-start gap-2 rounded-xl bg-[#E8EDF6] p-4">
          <Info
            size={17}
            strokeWidth={1.8}
            className="mt-0.5 shrink-0 text-[#1B2E52]"
          />

          <p className="text-[11px] leading-5 text-gray-600">
            가입 시 등록한 이메일로 본인 확인을 진행합니다.
            실제 비밀번호 변경은 이메일 인증이 완료된 후
            가능합니다.
          </p>
        </div>
      </main>
    </div>
  );
}
