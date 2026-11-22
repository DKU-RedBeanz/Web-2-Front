
import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Eye,
  EyeOff,
  CheckCircle2,
  Mail,
  School,
} from 'lucide-react';

export default function SignupPage() {
  const navigate = useNavigate();

  // 회원가입 입력값
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [school, setSchool] = useState('단국대학교');
  const [agreed, setAgreed] = useState(false);

  // 비밀번호 표시 여부
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 아이디 중복 확인 (추후 API 연결)
  const checkId = () => {
    if (!userId.trim()) {
      alert('아이디를 입력해주세요.');
      return;
    }

    alert('아이디 중복확인 기능은 추후 서버와 연결됩니다.');
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

    alert('인증번호 확인 기능은 추후 연결됩니다.');
  };

  // 회원가입 처리 (추후 API 연결)
  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
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

    if (password.length < 8) {
      alert('비밀번호는 8자 이상 입력해주세요.');
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

    alert('회원가입 기능은 추후 서버와 연결됩니다.');
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
            회원가입
          </h1>
        </div>
      </header>

      {/* 본문 */}
      <main className="mx-auto w-full max-w-[390px] px-4 pt-8 pb-12">

        {/* 안내 문구 */}
        <div className="mb-8">
          <h2 className="text-[22px] font-bold text-[#1B2E52]">
            환영합니다!
          </h2>

          <p className="mt-2 text-[12px] text-gray-400">
            가입하고 우리 학교 맛집 정보를 알아보세요.
          </p>
        </div>

        <form onSubmit={handleSignup} className="flex flex-col">

          {/* 아이디 */}
          <div className="mb-5">
            <label
              htmlFor="signup-id"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              아이디
            </label>

            <div className="flex gap-2">
              <input
                id="signup-id"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="아이디를 입력해주세요"
                autoComplete="username"
                required
                className="h-11 min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-3 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
              />

              <button
                type="button"
                onClick={checkId}
                className="h-11 shrink-0 rounded-lg bg-[#E8EDF6] px-3 text-[11px] font-semibold text-[#1B2E52]"
              >
                중복확인
              </button>
            </div>
          </div>

          {/* 비밀번호 */}
          <div className="mb-5">
            <label
              htmlFor="signup-password"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              비밀번호
            </label>

            <div className="relative">
              <input
                id="signup-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="8자 이상 입력해주세요"
                autoComplete="new-password"
                minLength={8}
                required
                className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 pr-11 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* 비밀번호 확인 */}
          <div className="mb-5">
            <label
              htmlFor="signup-confirm"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              비밀번호 확인
            </label>

            <div className="relative">
              <input
                id="signup-confirm"
                type={showConfirmPassword ? 'text' : 'password'}
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="비밀번호를 다시 입력해주세요"
                autoComplete="new-password"
                required
                className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 pr-11 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label="비밀번호 확인 표시 전환"
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {passwordConfirm && (
              <p
                className={`mt-2 text-[11px] ${
                  password === passwordConfirm
                    ? 'text-green-600'
                    : 'text-red-500'
                }`}
              >
                {password === passwordConfirm
                  ? '비밀번호가 일치합니다.'
                  : '비밀번호가 일치하지 않습니다.'}
              </p>
            )}
          </div>

          {/* 닉네임 */}
          <div className="mb-5">
            <label
              htmlFor="signup-nickname"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              닉네임
            </label>

            <input
              id="signup-nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력해주세요"
              maxLength={20}
              required
              className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
            />
          </div>

          {/* 이메일 */}
          <div className="mb-5">
            <label
              htmlFor="signup-email"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              이메일
            </label>

            <div className="flex gap-2">
              <div className="relative min-w-0 flex-1">
                <Mail
                  size={16}
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소"
                  autoComplete="email"
                  required
                  className="h-11 w-full rounded-lg border border-gray-200 bg-white pr-3 pl-9 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
                />
              </div>

              <button
                type="button"
                onClick={sendEmailCode}
                className="h-11 shrink-0 rounded-lg bg-[#E8EDF6] px-3 text-[11px] font-semibold text-[#1B2E52]"
              >
                인증번호 발송
              </button>
            </div>
          </div>

          {/* 이메일 인증번호 */}
          <div className="mb-5">
            <label
              htmlFor="signup-code"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              인증번호
            </label>

            <div className="flex gap-2">
              <input
                id="signup-code"
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="인증번호를 입력해주세요"
                required
                className="h-11 min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-3 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
              />

              <button
                type="button"
                onClick={checkEmailCode}
                className="h-11 shrink-0 rounded-lg bg-[#E8EDF6] px-3 text-[11px] font-semibold text-[#1B2E52]"
              >
                인증확인
              </button>
            </div>
          </div>

          {/* 학교 선택 */}
          <div className="mb-6">
            <label
              htmlFor="signup-school"
              className="mb-2 flex items-center gap-2 text-[12px] font-semibold text-[#1B2E52]"
            >
              <School size={16} strokeWidth={1.8} />
              대학교
            </label>

            <select
              id="signup-school"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              required
              className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 text-[12px] outline-none focus:border-[#1B2E52]"
            >
              <option value="단국대학교">단국대학교</option>
              <option value="부산대학교">부산대학교</option>
              <option value="기타">기타</option>
            </select>
          </div>

          {/* 이용약관 동의 */}
          <label className="mb-6 flex cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#1B2E52]"
            />

            <span className="text-[11px] leading-5 text-gray-500">
              이용약관 및 개인정보 처리방침에 동의합니다. (필수)
            </span>
          </label>

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#1B2E52] text-[13px] font-semibold text-white"
          >
            <CheckCircle2 size={18} strokeWidth={1.8} />
            가입하기
          </button>
        </form>

        {/* 로그인 이동 */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[12px]">
          <span className="text-gray-400">
            이미 계정이 있으신가요?
          </span>

          <Link
            to="/login"
            className="font-semibold text-[#1B2E52] underline underline-offset-2"
          >
            로그인
          </Link>
        </div>
      </main>
    </div>
  );
}
