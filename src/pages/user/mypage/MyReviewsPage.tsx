import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyReviewsPage.css';

// 리뷰 데이터 타입
interface Review {
  id: number;
  restaurant: string;
  date: string;
  rating: number;
  content: string;
}

// 임시 리뷰 데이터
const initialReviews: Review[] = [
  {
    id: 1,
    restaurant: '정든식당',
    date: '2026.11.08',
    rating: 5,
    content: '음식도 맛있고 양도 많아요! 다음에 또 방문할 것 같아요.',
  },
  {
    id: 2,
    restaurant: '캠퍼스 파스타',
    date: '2026.11.03',
    rating: 4,
    content: '파스타가 맛있고 분위기도 좋아요. 친구들이랑 오기 좋습니다.',
  },
  {
    id: 3,
    restaurant: '오늘의 덮밥',
    date: '2026.10.28',
    rating: 4,
    content: '가격도 괜찮고 음식이 빨리 나와서 점심 먹기 좋아요.',
  },
];

export default function MyReviewsPage() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  // 리뷰 삭제 (임시 데이터에서만 삭제)
  const handleDelete = (id: number) => {
    const confirmed = window.confirm('리뷰를 삭제하시겠습니까?');

    if (confirmed) {
      setReviews((prev) => prev.filter((review) => review.id !== id));
    }
  };

  return (
    <div className="my-reviews-page">
      {/* 상단 헤더 */}
      <header className="my-reviews-header">
        <button
          type="button"
          className="my-reviews-back"
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
        <h1>내 리뷰</h1>
      </header>

      <main className="my-reviews-content">
        {/* 리뷰 개수 */}
        <div className="my-reviews-summary">
          <h2>작성한 리뷰</h2>
          <span>총 {reviews.length}개</span>
        </div>

        {/* 리뷰 목록 */}
        {reviews.length > 0 ? (
          <div className="my-reviews-list">
            {reviews.map((review) => (
              <article className="my-review-card" key={review.id}>
                {/* 식당 이름과 날짜 */}
                <div className="my-review-top">
                  <h3>{review.restaurant}</h3>
                  <span>{review.date}</span>
                </div>

                {/* 별점 */}
                <div className="my-review-rating">
                  <span className="my-review-stars">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </span>
                  <span>{review.rating}.0</span>
                </div>

                {/* 리뷰 내용 */}
                <p className="my-review-text">
                  {review.content}
                </p>

                {/* 수정 및 삭제 버튼 */}
                <div className="my-review-actions">
                  <button
                    type="button"
                    className="my-review-edit"
                    onClick={() =>
                      navigate(`/review/${review.id}/edit`)
                    }
                  >
                    수정
                  </button>

                  <button
                    type="button"
                    className="my-review-delete"
                    onClick={() => handleDelete(review.id)}
                  >
                    삭제
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="my-reviews-empty">
            <p>아직 작성한 리뷰가 없어요.</p>
            <span>맛집에 방문하고 첫 리뷰를 남겨보세요!</span>
          </div>
        )}
      </main>
    </div>
  );
}