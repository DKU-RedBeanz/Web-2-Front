
import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  UserRound,
  Mail,
  Search,
  Info,
} from 'lucide-react';

export default function FindIdPage() {
  const navigate = useNavigate();

  // 아이디 찾기 입력값
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  // 아이디 찾기 (추후 API 연결)
  const handleFindId = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nickname.trim() || !email.trim()) {
      alert('닉네임과 이메일을 모두 입력해주세요.');
      return;
    }

    // 실제 아이디 조회는 백엔드 연결 후 구현
    alert('아이디 찾기 기능은 추후 서버와 연결됩니다.');
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
            아이디 찾기
          </h1>
        </div>
      </header>

      {/* 본문 */}
      <main className="mx-auto w-full max-w-[390px] px-4 pt-8 pb-12">

        {/* 제목 및 안내 */}
        <section className="mb-9">
          <h2 className="text-[22px] font-bold text-[#1B2E52]">
            아이디를 잊으셨나요?
          </h2>

          <p className="mt-3 text-[12px] leading-5 text-gray-400">
            가입 시 등록한 닉네임과 이메일을
            <br />
            입력해주세요.
          </p>
        </section>

        {/* 아이디 찾기 폼 */}
        <form onSubmit={handleFindId} className="flex flex-col">

          {/* 닉네임 */}
          <div className="mb-5">
            <label
              htmlFor="find-nickname"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              닉네임
            </label>

            <div className="relative">
              <UserRound
                size={17}
                strokeWidth={1.7}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
              />

              <input
                id="find-nickname"
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="가입 시 등록한 닉네임"
                autoComplete="nickname"
                required
                className="h-11 w-full rounded-lg border border-gray-200 bg-white pr-3 pl-10 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
              />
            </div>
          </div>

          {/* 이메일 */}
          <div className="mb-6">
            <label
              htmlFor="find-email"
              className="mb-2 block text-[12px] font-semibold text-[#1B2E52]"
            >
              이메일
            </label>

            <div className="relative">
              <Mail
                size={17}
                strokeWidth={1.7}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
              />

              <input
                id="find-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="가입 시 등록한 이메일 주소"
                autoComplete="email"
                required
                className="h-11 w-full rounded-lg border border-gray-200 bg-white pr-3 pl-10 text-[12px] outline-none placeholder:text-gray-400 focus:border-[#1B2E52]"
              />
            </div>
          </div>

          {/* 아이디 찾기 버튼 */}
          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#1B2E52] text-[13px] font-semibold text-white"
          >
            <Search size={17} strokeWidth={1.8} />
            아이디 찾기
          </button>
        </form>

        {/* 로그인 페이지 이동 */}
        <div className="mt-5 flex items-center justify-center gap-2 text-[12px]">
          <span className="text-gray-400">
            아이디가 기억나셨나요?
          </span>

          <Link
            to="/login"
            className="font-semibold text-[#1B2E52] underline underline-offset-2"
          >
            로그인
          </Link>
        </div>

        {/* 안내 메시지 */}
        <div className="mt-10 flex items-start gap-2 rounded-xl bg-[#E8EDF6] p-4">
          <Info
            size={17}
            strokeWidth={1.8}
            className="mt-0.5 shrink-0 text-[#1B2E52]"
          />

          <p className="text-[11px] leading-5 text-gray-600">
            가입할 때 사용한 닉네임과 이메일을 정확하게
            입력해주세요. 입력한 정보는 계정 확인 용도로만
            사용됩니다.
          </p>
        </div>
      </main>
    </div>
  );
}
