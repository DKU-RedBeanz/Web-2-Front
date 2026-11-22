
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Star,
  MapPin,
  Utensils,
  Search,
} from 'lucide-react';

// 찜한 맛집 데이터 타입
interface FavoriteRestaurant {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
}

// 임시 맛집 데이터
const initialFavorites: FavoriteRestaurant[] = [
  {
    id: 1,
    name: '정든식당',
    category: '한식',
    rating: 4.8,
    reviewCount: 128,
    location: '단국대학교 근처',
  },
  {
    id: 2,
    name: '캠퍼스 파스타',
    category: '양식',
    rating: 4.6,
    reviewCount: 86,
    location: '단국대학교 정문 근처',
  },
  {
    id: 3,
    name: '오늘의 덮밥',
    category: '일식',
    rating: 4.5,
    reviewCount: 64,
    location: '단국대학교 근처',
  },
];

export default function FavoritesPage() {
  const navigate = useNavigate();

  // 찜한 맛집 목록
  const [favorites, setFavorites] =
    useState<FavoriteRestaurant[]>(initialFavorites);

  // 찜 해제 기능 (임시 데이터에서만 삭제)
  const handleRemoveFavorite = (id: number) => {
    const confirmed = window.confirm(
      '찜 목록에서 삭제하시겠습니까?'
    );

    if (confirmed) {
      setFavorites((prev) =>
        prev.filter((restaurant) => restaurant.id !== id)
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#222222]">

      {/* 상단 헤더 */}
      <header className="h-[52px] border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-full w-full max-w-[390px] items-center gap-2 px-4">

          <button
            type="button"
            onClick={() => navigate('/mypage')}
            aria-label="뒤로가기"
            className="flex h-8 w-8 shrink-0 items-center justify-center"
          >
            <ArrowLeft size={20} strokeWidth={1.8} />
          </button>

          <h1 className="text-[15px] font-bold">
            찜한 맛집
          </h1>
        </div>
      </header>

      {/* 본문 */}
      <main className="mx-auto w-full max-w-[390px] px-4 pt-5 pb-10">

        {/* 찜한 맛집 개수 */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[14px] font-bold">
            내가 찜한 맛집
          </h2>

          <span className="text-[11px] text-gray-400">
            총 {favorites.length}개
          </span>
        </div>

        {/* 찜 목록 */}
        {favorites.length > 0 ? (
          <div className="flex flex-col gap-3">

            {favorites.map((restaurant) => (
              <article
                key={restaurant.id}
                className="flex min-w-0 items-start gap-3 rounded-xl bg-white p-4"
              >

                {/* 음식점 이미지 영역 */}
                <button
                  type="button"
                  onClick={() =>
                    navigate(`/restaurants/${restaurant.id}`)
                  }
                  aria-label={`${restaurant.name} 상세보기`}
                  className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-lg bg-[#E8EDF6] text-[#1B2E52]"
                >
                  <Utensils size={30} strokeWidth={1.5} />
                </button>

                {/* 음식점 정보 */}
                <button
                  type="button"
                  onClick={() =>
                    navigate(`/restaurants/${restaurant.id}`)
                  }
                  className="min-w-0 flex-1 text-left"
                >
                  <h3 className="truncate text-[14px] font-bold">
                    {restaurant.name}
                  </h3>

                  <p className="mt-1 text-[11px] text-gray-500">
                    {restaurant.category}
                  </p>

                  {/* 별점 */}
                  <div className="mt-2 flex items-center gap-1">
                    <Star
                      size={15}
                      fill="#F5B942"
                      stroke="#F5B942"
                    />
                    <span className="text-[12px] font-semibold">
                      {restaurant.rating.toFixed(1)}
                    </span>

                    <span className="text-[11px] text-gray-400">
                      ({restaurant.reviewCount})
                    </span>
                  </div>

                  {/* 위치 */}
                  <div className="mt-2 flex items-center gap-1 text-gray-400">
                    <MapPin size={13} strokeWidth={1.7} />
                    <span className="truncate text-[10px]">
                      {restaurant.location}
                    </span>
                  </div>
                </button>

                {/* 찜 해제 버튼 */}
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveFavorite(restaurant.id)
                  }
                  aria-label={`${restaurant.name} 찜 해제`}
                  className="flex h-7 w-7 shrink-0 items-center justify-center text-[#E05252]"
                >
                  <Heart
                    size={22}
                    strokeWidth={1.8}
                    fill="currentColor"
                  />
                </button>
              </article>
            ))}
          </div>
        ) : (

          /* 찜 목록이 비었을 때 */
          <div className="flex flex-col items-center justify-center py-24 text-center">

            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8EDF6]">
              <Heart
                size={30}
                strokeWidth={1.5}
                className="text-[#1B2E52]"
              />
            </div>

            <p className="text-[14px] font-semibold">
              아직 찜한 맛집이 없어요.
            </p>

            <p className="mt-2 text-[12px] text-gray-400">
              마음에 드는 맛집을 찜해보세요!
            </p>

            <button
              type="button"
              onClick={() => navigate('/restaurants')}
              className="mt-6 flex h-10 items-center gap-2 rounded-lg bg-[#1B2E52] px-5 text-xs font-semibold text-white"
            >
              <Search size={16} strokeWidth={1.8} />
              맛집 둘러보기
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
