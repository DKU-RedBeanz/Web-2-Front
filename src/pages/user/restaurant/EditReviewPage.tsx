import { useState, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  X,
  Utensils,
  Star,
  Info,
} from 'lucide-react';

// 리뷰 정보 타입
interface Review {
  id: number;
  restaurant: string;
  menuName: string;
  price: string;
  rating: number;
  recommended: boolean;
  content: string;
}

// 임시 리뷰 데이터 (추후 서버에서 가져온 리뷰 데이터로 교체)
const reviews: Review[] = [
  {
    id: 1,
    restaurant: '정든식당',
    menuName: '제육볶음 정식',
    price: '8,500원',
    rating: 5,
    recommended: true,
    content: '음식도 맛있고 양도 많아요! 다음에 또 방문할 것 같아요.',
  },
  {
    id: 2,
    restaurant: '캠퍼스 파스타',
    menuName: '토마토 미트 파스타',
    price: '9,500원',
    rating: 4,
    recommended: true,
    content: '파스타가 맛있고 분위기도 좋아요. 친구들이랑 오기 좋습니다.',
  },
  {
    id: 3,
    restaurant: '오늘의 덮밥',
    menuName: '가츠동',
    price: '8,000원',
    rating: 4,
    recommended: true,
    content: '가격도 괜찮고 음식이 빨리 나와서 점심 먹기 좋아요.',
  },
];

export default function EditReviewPage() {
  const navigate = useNavigate();
  const { reviewId } = useParams();

  // 주소에 포함된 리뷰 ID로 데이터 조회
  const originalReview = reviews.find(
    (review) => review.id === Number(reviewId)
  );

  // 수정할 입력값
  const [rating, setRating] = useState(originalReview?.rating ?? 0);
  const [recommended, setRecommended] = useState(
    originalReview?.recommended ?? true
  );
  const [content, setContent] = useState(originalReview?.content ?? '');
  const [hoverRating, setHoverRating] = useState(0);

  // 리뷰 변경 여부
  const isModified = originalReview
    ? rating !== originalReview.rating ||
      recommended !== originalReview.recommended ||
      content !== originalReview.content
    : false;

  // 취소 및 뒤로가기
  const handleBack = () => {
    if (isModified) {
      const confirmed = window.confirm(
        '수정 중인 내용이 있습니다. 저장하지 않고 나가시겠습니까?'
      );

      if (!confirmed) return;
    }

    navigate('/mypage/reviews');
  };

  // 리뷰 수정 (추후 API 연결)
  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!originalReview) return;

    if (rating === 0) {
      alert('별점을 선택해주세요.');
      return;
    }

    if (content.trim().length < 10) {
      alert('리뷰는 10자 이상 작성해주세요.');
      return;
    }

    // 실제 저장 API는 아직 연결하지 않음
    alert('리뷰 수정 기능은 추후 서버와 연결됩니다.');
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#222222]">
      {/* 상단 헤더 */}
      <header className="h-[52px] border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-full w-full max-w-[390px] items-center gap-2 px-4">
          <button
            type="button"
            onClick={handleBack}
            aria-label="뒤로가기"
            className="flex h-8 w-8 shrink-0 items-center justify-center"
          >
            <ArrowLeft size={20} strokeWidth={1.8} />
          </button>

          <h1 className="flex-1 text-[15px] font-bold">리뷰 수정</h1>

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
        {!originalReview ? (
          /* 존재하지 않는 리뷰 */
          <div className="flex flex-col items-center rounded-xl bg-white px-4 py-16 text-center">
            <Info size={32} strokeWidth={1.5} className="text-gray-400" />

            <p className="mt-4 text-[14px] font-semibold">
              리뷰를 찾을 수 없습니다.
            </p>

            <button
              type="button"
              onClick={() => navigate('/mypage/reviews')}
              className="mt-6 h-10 rounded-lg bg-[#1B2E52] px-5 text-xs font-semibold text-white"
            >
              내 리뷰로 돌아가기
            </button>
          </div>
        ) : (
          <>
            {/* 리뷰 대상 (음식점 및 메뉴 정보) */}
            <section className="mb-3 flex items-center gap-3 rounded-xl bg-white p-4">
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-lg bg-[#E8EDF6] text-[#1B2E52]">
                <Utensils size={26} strokeWidth={1.7} />
              </div>

              <div className="min-w-0">
                <h2 className="text-[14px] font-bold">
                  {originalReview.menuName}
                </h2>
                <p className="mt-0.5 text-xs text-gray-500">
                  {originalReview.restaurant} · {originalReview.price}
                </p>
                <p className="mt-1 text-[11px] leading-4 text-gray-400">
                  방문한 맛집의 리뷰를 수정해주세요.
                </p>
              </div>
            </section>

            {/* 리뷰 수정 폼 */}
            <form onSubmit={handleSave} className="flex flex-col gap-3">
              {/* 별점 카드 */}
              <section className="flex flex-col items-center rounded-xl bg-white px-4 py-6">
                <h3 className="text-[14px] font-bold">별점</h3>

                <p className="mt-2 text-xs text-gray-500">
                  음식점은 어떠셨나요?
                </p>

                <div
                  className="mt-5 flex items-center justify-center gap-2"
                  role="group"
                  aria-label="별점 선택"
                >
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
                      className="flex h-9 w-9 items-center justify-center"
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

              {/* 추천 여부 카드 */}
              <section className="rounded-xl bg-white p-4">
                <h3
                  id="recommend-label"
                  className="mb-3 text-[13px] font-bold"
                >
                  추천 여부
                </h3>

                <div
                  role="group"
                  aria-labelledby="recommend-label"
                  className="flex gap-2"
                >
                  {[
                    { label: '추천', value: true },
                    { label: '비추천', value: false },
                  ].map(({ label, value }) => (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={recommended === value}
                      onClick={() => setRecommended(value)}
                      className={`min-h-9 cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                        recommended === value
                          ? 'border-[#1B2E52] bg-[#1B2E52] text-white'
                          : 'border-gray-200 bg-white text-[#222222]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
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
                  다른 이용자들에게 도움이 될 수 있도록 솔직하고 자세한 리뷰를
                  작성해주세요.
                </p>
              </div>

              {/* 취소 및 저장 버튼 */}
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
                  disabled={
                    !isModified ||
                    rating === 0 ||
                    content.trim().length < 10
                  }
                  className="flex h-11 flex-1 items-center justify-center rounded-lg bg-[#1B2E52] text-xs font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#AAB3C2]"
                >
                  수정 완료
                </button>
              </div>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
