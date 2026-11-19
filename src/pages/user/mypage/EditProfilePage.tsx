
import { useState, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  X,
  Utensils,
  Star,
  Info,
} from 'lucide-react';

export default function EditReviewPage() {
  const navigate = useNavigate();
  const { reviewId } = useParams();

  // 임시 리뷰 데이터
  // 추후 서버에서 reviewId를 이용해 리뷰 정보를 가져올 예정
  const originalReview = {
    restaurant: '정든식당',
    rating: 5,
    content: '음식도 맛있고 양도 많아요! 다음에 또 방문할 것 같아요.',
  };

  // 리뷰 수정 상태
  const [rating, setRating] = useState(originalReview.rating);
  const [content, setContent] = useState(originalReview.content);
  const [hoverRating, setHoverRating] = useState(0);

  // 기존 리뷰와 비교하여 수정 여부 확인
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

  // 리뷰 수정 완료 (추후 API 연결)
  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!content.trim()) {
      alert('리뷰 내용을 입력해주세요.');
      return;
    }

    if (content.trim().length < 10) {
      alert('리뷰는 10자 이상 작성해주세요.');
      return;
    }

    // 실제 서버 저장 전 임시 확인
    console.log('수정할 리뷰 ID:', reviewId);
    console.log('변경한 별점:', rating);

    alert('리뷰 수정 기능은 추후 서버와 연결됩니다.');
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#222222]">

      {/* 상단 헤더 */}
      <header className="flex h-[52px] items-center border-b border-gray-100 bg-white">
        <div className="mx-auto flex w-full max-w-[390px] items-center gap-2 px-4">

          <button
            type="button"
            onClick={handleBack}
            aria-label="뒤로가기"
            className="flex h-8 w-8 shrink-0 items-center justify-center"
          >
            <ArrowLeft size={20} strokeWidth={1.8} />
          </button>

          <h1 className="flex-1 text-[15px] font-bold">
            리뷰 수정
          </h1>

          <button
            type="button"
            onClick={handleBack}
            aria-label="닫기"
            className="flex h-8 w-8 items-center justify-center"
          >
            <X size={20} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {/* 본문 */}
      <main className="mx-auto w-full max-w-[390px] px-4 pt-5 pb-10">

        {/* 음식점 정보 */}
        <section className="mb-3 flex items-center gap-3 rounded-xl bg-white p-4">

          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-lg bg-[#E8EDF6] text-[#1B2E52]">
            <Utensils size={26} strokeWidth={1.7} />
          </div>

          <div className="min-w-0">
            <h2 className="text-[14px] font-bold">
              {originalReview.restaurant}
            </h2>

            <p className="mt-1 text-[11px] leading-5 text-gray-400">
              방문한 맛집의 리뷰를 수정해주세요.
            </p>
          </div>
        </section>

        {/* 리뷰 수정 폼 */}
        <form onSubmit={handleSave} className="flex flex-col gap-3">

          {/* 별점 카드 */}
          <section className="flex flex-col items-center rounded-xl bg-white px-4 py-6">

            <h3 className="text-[14px] font-bold">
              별점
            </h3>

            <p className="mt-2 text-xs text-gray-500">
              음식점은 어떠셨나요?
            </p>

            {/* 별점 선택 */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onFocus={() => setHoverRating(star)}
                  onBlur={() => setHoverRating(0)}
                  aria-label={`${star}점`}
                  aria-pressed={rating === star}
                  className="flex h-[36px] w-[36px] items-center justify-center"
                >
                  <Star
                    size={30}
                    strokeWidth={1.5}
                    className={
                      star <= (hoverRating || rating)
                        ? 'fill-[#F5B942] text-[#F5B942]'
                        : 'fill-none text-gray-300'
                    }
                  />
                </button>
              ))}
            </div>

            <span className="mt-4 text-xs font-semibold text-[#1B2E52]">
              {rating}.0 / 5.0
            </span>
          </section>

          {/* 리뷰 내용 카드 */}
          <section className="rounded-xl bg-white p-4">

            <label
              htmlFor="edit-review-text"
              className="mb-3 block text-[13px] font-bold"
            >
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
              className="w-full resize-none rounded-lg border border-gray-200 bg-white p-3 text-xs leading-5 text-[#222222] outline-none focus:border-[#1B2E52]"
            />

            <p className="mt-2 text-right text-[11px] text-gray-400">
              {content.length}/500
            </p>
          </section>

          {/* 안내 문구 */}
          <div className="flex items-start gap-2 px-1 py-2">
            <Info
              size={15}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-gray-400"
            />

            <p className="text-[11px] leading-5 text-gray-400">
              다른 이용자들에게 도움이 될 수 있도록
              솔직하고 자세한 리뷰를 작성해주세요.
            </p>
          </div>

          {/* 하단 버튼 */}
          <div className="flex gap-3 pt-1">

            <button
              type="button"
              onClick={handleBack}
              className="flex h-11 flex-1 items-center justify-center rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-600"
            >
              취소
            </button>

            <button
              type="submit"
              disabled={!isModified || !content.trim()}
              className="flex h-11 flex-1 items-center justify-center rounded-lg bg-[#1B2E52] text-xs font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#AAB3C2]"
            >
              수정 완료
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
