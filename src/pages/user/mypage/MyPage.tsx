
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight,
  Heart,
  House,
  LogOut,
  MessageSquare,
  Search,
  UserRound,
} from 'lucide-react';

export default function MyPage() {
  const navigate = useNavigate();

  // 임시 사용자 정보 (추후 API 연결)
  const user = {
    nickname: '맛집탐험가',
    school: '단국대학교',
    introduction: '맛있는 음식과 함께하는 대학생활!',
    reviewCount: 12,
    favoriteCount: 8,
  };

  // 로그아웃 기능 (추후 API 연결)
  const handleLogout = () => {
    alert('로그아웃 기능은 추후 서버와 연결됩니다.');
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F8FA] text-[#222222]">

      {/* 상단 헤더 */}
      <header className="h-[52px] shrink-0 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-full w-full max-w-[390px] items-center px-4">
          <h1 className="text-[16px] font-bold">
            마이페이지
          </h1>
        </div>
      </header>

      {/* 본문 */}
      <main className="mx-auto w-full max-w-[390px] flex-1 px-4 pt-5 pb-6">

        {/* 프로필 카드 */}
        <section className="rounded-xl bg-white p-4">
          <div className="flex items-center gap-3">

            {/* 프로필 아이콘 */}
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#E8EDF6] text-[#1B2E52]">
              <UserRound size={27} strokeWidth={1.7} />
            </div>

            {/* 사용자 정보 */}
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-[15px] font-bold">
                {user.nickname}
              </h2>

              <p className="mt-1 text-[11px] text-gray-400">
                {user.school}
              </p>
            </div>

            {/* 내 정보 수정 버튼 */}
            <button
              type="button"
              onClick={() => navigate('/mypage/edit')}
              className="flex h-8 shrink-0 items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 text-[11px] text-gray-600"
            >
              내 정보 수정
              <ChevronRight size={14} strokeWidth={1.8} />
            </button>
          </div>

          {/* 자기소개 */}
          <p className="mt-4 text-xs leading-5 text-gray-500">
            {user.introduction}
          </p>
        </section>

        {/* 활동 정보 */}
        <section className="mt-3 flex items-center rounded-xl bg-white py-5">

          {/* 작성한 리뷰 */}
          <button
            type="button"
            onClick={() => navigate('/mypage/reviews')}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <MessageSquare
              size={22}
              strokeWidth={1.7}
              className="text-[#1B2E52]"
            />

            <span className="text-[18px] font-bold text-[#1B2E52]">
              {user.reviewCount}
            </span>

            <span className="text-[12px] text-gray-500">
              작성한 리뷰
            </span>
          </button>

          {/* 구분선 */}
          <div className="h-12 w-px bg-gray-200" />

          {/* 찜한 맛집 */}
          <button
            type="button"
            onClick={() => navigate('/mypage/favorites')}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <Heart
              size={22}
              strokeWidth={1.7}
              className="text-[#1B2E52]"
            />

            <span className="text-[18px] font-bold text-[#1B2E52]">
              {user.favoriteCount}
            </span>

            <span className="text-[12px] text-gray-500">
              찜한 맛집
            </span>
          </button>
        </section>

        {/* 메뉴 목록 */}
        <section className="mt-3 overflow-hidden rounded-xl bg-white">

          {/* 내 정보 수정 */}
          <button
            type="button"
            onClick={() => navigate('/mypage/edit')}
            className="flex h-[52px] w-full items-center justify-between border-b border-gray-100 px-4"
          >
            <span className="flex items-center gap-3 text-[12px] text-gray-700">
              <UserRound size={18} strokeWidth={1.7} />
              내 정보 수정
            </span>

            <ChevronRight size={18} className="text-gray-400" />
          </button>

          {/* 내 리뷰 */}
          <button
            type="button"
            onClick={() => navigate('/mypage/reviews')}
            className="flex h-[52px] w-full items-center justify-between border-b border-gray-100 px-4"
          >
            <span className="flex items-center gap-3 text-[12px] text-gray-700">
              <MessageSquare size={18} strokeWidth={1.7} />
              내가 작성한 리뷰
            </span>

            <ChevronRight size={18} className="text-gray-400" />
          </button>

          {/* 찜한 맛집 */}
          <button
            type="button"
            onClick={() => navigate('/mypage/favorites')}
            className="flex h-[52px] w-full items-center justify-between px-4"
          >
            <span className="flex items-center gap-3 text-[12px] text-gray-700">
              <Heart size={18} strokeWidth={1.7} />
              찜한 맛집
            </span>

            <ChevronRight size={18} className="text-gray-400" />
          </button>
        </section>

        {/* 로그아웃 */}
        <button
          type="button"
          onClick={handleLogout}
          className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-white text-xs text-gray-500"
        >
          <LogOut size={17} strokeWidth={1.7} />
          로그아웃
        </button>
      </main>

      {/* 하단 네비게이션 */}
      <nav
        aria-label="하단 메뉴"
        className="sticky bottom-0 z-10 shrink-0 bg-[#F7F8FA] py-3"
      >
        <div className="mx-auto w-full max-w-[390px] px-4">
          <div className="flex h-[76px] items-center rounded-2xl border border-[#DCE4F0] bg-white">

            {/* 홈 */}
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400"
            >
              <House size={26} strokeWidth={1.7} />
              <span className="text-[12px]">홈</span>
            </button>

            {/* 검색 */}
            <button
              type="button"
              onClick={() => navigate('/restaurants')}
              className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400"
            >
              <Search size={26} strokeWidth={1.7} />
              <span className="text-[12px]">검색</span>
            </button>

            {/* 찜 */}
            <button
              type="button"
              onClick={() => navigate('/mypage/favorites')}
              className="flex flex-1 flex-col items-center justify-center gap-1 text-gray-400"
            >
              <Heart size={26} strokeWidth={1.7} />
              <span className="text-[12px]">찜</span>
            </button>

            {/* MY */}
            <button
              type="button"
              onClick={() => navigate('/mypage')}
              aria-current="page"
              className="flex flex-1 flex-col items-center justify-center gap-1 font-semibold text-[#4563AE]"
            >
              <UserRound size={26} strokeWidth={1.7} />
              <span className="text-[12px]">MY</span>
            </button>

          </div>
        </div>
      </nav>
    </div>
  );
}
