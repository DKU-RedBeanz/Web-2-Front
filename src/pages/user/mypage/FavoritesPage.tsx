import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FavoritesPage.css';

// 맛집 데이터 타입
interface FavoriteRestaurant {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
}

// 임시 찜 목록
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

  const [favorites, setFavorites] =
    useState<FavoriteRestaurant[]>(initialFavorites);

  // 찜 해제
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
    <div className="favorites-page">
      {/* 상단 헤더 */}
      <header className="favorites-header">
        <button
          type="button"
          className="favorites-back"
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
        <h1>찜한 맛집</h1>
      </header>

      <main className="favorites-content">
        {/* 찜 목록 개수 */}
        <div className="favorites-summary">
          <h2>내가 찜한 맛집</h2>
          <span>총 {favorites.length}개</span>
        </div>

        {/* 찜 목록 */}
        {favorites.length > 0 ? (
          <div className="favorites-list">
            {favorites.map((restaurant) => (
              <article
                className="favorite-card"
                key={restaurant.id}
              >
                {/* 음식점 이미지 자리 */}
                <div className="favorite-image">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 3v7a4 4 0 0 0 4 4V3" />
                    <path d="M8 3v18" />
                    <path d="M18 3v18" />
                    <path d="M18 3c-4 0-4 9 0 9" />
                  </svg>
                </div>

                {/* 음식점 정보 */}
                <div
                  className="favorite-info"
                  onClick={() =>
                    navigate(`/restaurants/${restaurant.id}`)
                  }
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      navigate(`/restaurants/${restaurant.id}`);
                    }
                  }}
                >
                  <h3>{restaurant.name}</h3>

                  <p className="favorite-category">
                    {restaurant.category}
                  </p>

                  <div className="favorite-rating">
                    <span className="favorite-star">★</span>
                    <strong>{restaurant.rating.toFixed(1)}</strong>
                    <span>
                      ({restaurant.reviewCount})
                    </span>
                  </div>

                  <p className="favorite-location">
                    {restaurant.location}
                  </p>
                </div>

                {/* 찜 해제 버튼 */}
                <button
                  type="button"
                  className="favorite-heart"
                  onClick={() =>
                    handleRemoveFavorite(restaurant.id)
                  }
                  aria-label={`${restaurant.name} 찜 해제`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#e05252"
                    stroke="#e05252"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="favorites-empty">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b8bdc5"
              strokeWidth="1.5"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" />
            </svg>

            <p>아직 찜한 맛집이 없어요.</p>
            <span>마음에 드는 맛집을 찜해보세요!</span>

            <button
              type="button"
              onClick={() => navigate('/restaurants')}
            >
              맛집 둘러보기
            </button>
          </div>
        )}
      </main>
    </div>
  );
}