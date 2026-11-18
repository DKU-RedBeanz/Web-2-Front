import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditReviewPage.css';

export default function EditReviewPage() {
  const navigate = useNavigate();
  const { reviewId } = useParams();

  // 임시 리뷰 데이터 (추후 서버에서 불러올 예정)
  const originalReview = {
    restaurant: '정든식당',
    rating: 5,
    content:
      '음식도 맛있고 양도 많아요! 다음에 또 방문할 것 같아요.',
  };

  // 리뷰 수정 입력값
  const [rating, setRating] = useState(originalReview.rating);
  const [content, setContent] = useState(originalReview.content);

  // 마우스를 올린 별점
  const [hoverRating, setHoverRating] = useState(0);

  // 수정 여부 확인
  const isModified =
    rating !== originalReview.rating ||
    content !== originalReview.content;

  // 뒤로가기 및 취소
  const handleBack = () => {
    if (isModified) {
      const confirmed = window.confirm(
        '수정 중인 내용이 있습니다. 저장하지 않고 나가시겠습니까?'
      );

      if (!confirmed) return;
    }

    navigate('/mypage/reviews');
  };

  // 수정 완료 (추후 API 연결)
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content.trim()) {
      alert('리뷰 내용을 입력해주세요.');
      return;
    }

    if (content.trim().length < 10) {
      alert('리뷰는 10자 이상 작성해주세요.');
      return;
    }

    // 현재는 서버 저장 기능 미구현
    console.log('수정할 리뷰 ID:', reviewId);
    console.log('별점:', rating);

    alert('리뷰 수정 기능은 추후 서버와 연결됩니다.');
  };

  return (
    <div className="edit-review-page">
      {/* 상단 헤더 */}
      <header className="edit-review-header">
        <button
          type="button"
          className="edit-review-back"
          onClick={handleBack}
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

        <h1>리뷰 수정</h1>

        <button
          type="button"
          className="edit-review-close"
          onClick={handleBack}
          aria-label="닫기"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </header>

      <main className="edit-review-content">
        {/* 음식점 정보 */}
        <section className="edit-review-restaurant">
          <div className="edit-review-restaurant-icon">
            <svg
              width="28"
              height="28"
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

          <div>
            <h2>{originalReview.restaurant}</h2>
            <p>방문한 맛집의 리뷰를 수정해주세요.</p>
          </div>
        </section>

        {/* 리뷰 수정 폼 */}
        <form className="edit-review-form" onSubmit={handleSave}>
          {/* 별점 */}
          <section className="edit-review-rating-section">
            <h3>별점</h3>
            <p>음식점은 어떠셨나요?</p>

            <div className="edit-review-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={
                    star <= (hoverRating || rating)
                      ? 'edit-review-star active'
                      : 'edit-review-star'
                  }
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  aria-label={`${star}점`}
                  aria-pressed={rating === star}
                >
                  ★
                </button>
              ))}
            </div>

            <span className="edit-review-rating-number">
              {rating}.0 / 5.0
            </span>
          </section>

          {/* 리뷰 내용 */}
          <section className="edit-review-text-section">
            <label htmlFor="edit-review-text">
              리뷰 내용
            </label>

            <textarea
              id="edit-review-text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="맛집에 대한 솔직한 후기를 작성해주세요."
              maxLength={500}
              rows={7}
              required
            />

            <div className="edit-review-character-count">
              {content.length}/500
            </div>
          </section>

          {/* 안내 문구 */}
          <p className="edit-review-notice">
            다른 이용자들에게 도움이 될 수 있도록
            솔직하고 자세한 리뷰를 작성해주세요.
          </p>

          {/* 하단 버튼 */}
          <div className="edit-review-actions">
            <button
              type="button"
              className="edit-review-cancel"
              onClick={handleBack}
            >
              취소
            </button>

            <button
              type="submit"
              className="edit-review-save"
              disabled={!isModified || !content.trim()}
            >
              수정 완료
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}