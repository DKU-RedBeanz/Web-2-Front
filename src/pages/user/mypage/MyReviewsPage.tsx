
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Star,
  Pencil,
  Trash2,
  MessageSquare,
} from 'lucide-react';

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

  // 리뷰 목록 상태
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  // 리뷰 삭제 (현재 화면에서만 반영)
  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      '리뷰를 삭제하시겠습니까?'
    );

    if (confirmed) {
      setReviews((prev) =>
        prev.filter((review) => review.id !== id)
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#222222]">

      {/* 상단 헤더 */}
      <header className="flex h-[52px] items-center border-b border-gray-100 bg-white px-4">
        <div className="mx-auto flex w-full max-w-[390px] items-center gap-2">
          <button
            type="button"
            onClick={() => navigate('/mypage')}
            aria-label="뒤로가기"
            className="flex h-8 w-8 shrink-0 items-center justify-center"
          >
            <ArrowLeft size={19} strokeWidth={1.8} />
          </button>

          <h1 className="text-[15px] font-bold">
            내 리뷰
          </h1>
        </div>
      </header>

      {/* 본문: 최대 너비 360px */}
      <main className="mx-auto w-full max-w-[390px] px-3 pt-5 pb-10">

        {/* 리뷰 개수 */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[13px] font-bold">
            작성한 리뷰
          </h2>

          <span className="text-[11px] text-gray-400">
            총 {reviews.length}개
          </span>
        </div>

        {/* 리뷰 목록 */}
        {reviews.length > 0 ? (
          <div className="flex flex-col gap-[10px]">

            {reviews.map((review) => (
              <article
                key={review.id}
                className="min-w-0 rounded-xl bg-white p-3"
              >

                {/* 음식점 이름 및 날짜 */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="min-w-0 flex-1 break-words text-[13px] font-bold">
                    {review.restaurant}
                  </h3>

                  <span className="shrink-0 text-[10px] text-gray-400">
                    {review.date}
                  </span>
                </div>

                {/* 별점 */}
                <div className="mt-2 flex items-center gap-2">
                  <div
                    className="flex gap-[2px]"
                    aria-label={`별점 ${review.rating}점`}
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        strokeWidth={1.5}
                        className={
                          star <= review.rating
                            ? 'fill-[#F5B942] text-[#F5B942]'
                            : 'fill-none text-gray-300'
                        }
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-gray-600">
                    {review.rating}.0
                  </span>
                </div>

                {/* 리뷰 내용 */}
                <p className="mt-3 wrap-break-word text-[11px] leading-[19px] text-gray-600">
                  {review.content}
                </p>

                {/* 수정 / 삭제 버튼 */}
                <div className="mt-3 flex justify-end gap-2 border-t border-gray-100 pt-3">

                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/review/${review.id}/edit`)
                    }
                    className="flex h-[30px] items-center gap-1 rounded-lg bg-[#E8EDF6] px-[10px] text-[10px] font-medium text-[#1B2E52]"
                  >
                    <Pencil size={12} strokeWidth={1.8} />
                    수정
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(review.id)}
                    className="flex h-[30px] items-center gap-1 rounded-lg border border-red-100 bg-white px-[10px] text-[10px] font-medium text-red-500"
                  >
                    <Trash2 size={12} strokeWidth={1.8} />
                    삭제
                  </button>

                </div>
              </article>
            ))}
          </div>
        ) : (

          /* 리뷰가 없을 때 */
          <div className="flex flex-col items-center justify-center py-20 text-center">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8EDF6]">
              <MessageSquare
                size={26}
                strokeWidth={1.5}
                className="text-[#1B2E52]"
              />
            </div>

            <p className="text-[13px] font-semibold">
              아직 작성한 리뷰가 없어요.
            </p>

            <span className="mt-2 text-[11px] text-gray-400">
              맛집에 방문하고 첫 리뷰를 남겨보세요!
            </span>

            <button
              type="button"
              onClick={() => navigate('/restaurants')}
              className="mt-5 h-9 rounded-lg bg-[#1B2E52] px-4 text-[11px] font-semibold text-white"
            >
              맛집 둘러보기
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
