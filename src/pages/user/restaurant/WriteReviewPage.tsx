"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function WriteReviewPage() {
  const [rating, setRating] = useState(5);
  const [recommended, setRecommended] = useState(true);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();``
    
    if (!review.trim()) {
      setMessage("리뷰 내용을 입력해주세요.");
      return;
    }

    setMessage("리뷰 입력이 완료되었습니다. 아직 서버에는 저장되지 않습니다.");
  }

  return (
    <main className="mx-auto min-h-dvh w-full max-w-[402px] bg-[#F7F9FC] font-[Arial,sans-serif] text-[#202C49]">
      <header className="flex items-center gap-3 px-5 py-6">
        <button
          type="button"
          aria-label="뒤로 가기"
          onClick={() => window.history.back()}
          className="cursor-pointer border-0 bg-transparent p-0 text-[28px] text-[#202C49]"
        >
          <ArrowLeft size={24} strokeWidth={2} />
        </button>
        <h1 className="m-0 text-base font-bold">리뷰 작성</h1>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5 pb-6 pt-2">
        <section className="rounded-xl border border-[#E1E7F0] bg-white p-4">
          <h2 className="mb-3 mt-0 text-[15px] font-bold">리뷰 대상</h2>
          <div className="flex items-center gap-3">
            <div className="grid h-[60px] w-[60px] shrink-0 place-items-center rounded-[10px] bg-[#F7F9FC] text-[10px] text-[#738099]">
              음식 사진
            </div>
            <div>
              <strong className="text-[15px]">음식 이름</strong>
              <p className="mb-0 mt-1.5 text-xs text-[#738099]">정든식당 · 8,500원</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[#E1E7F0] bg-white p-4">
          <h2 id="rating-label" className="mb-3 mt-0 text-[15px] font-bold">
            별점
          </h2>
          <div
            role="group"
            aria-labelledby="rating-label"
            className="flex gap-1"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                aria-label={`${star}점`}
                aria-pressed={rating === star}
                onClick={() => setRating(star)}
                className={`h-11 w-10 cursor-pointer border-0 bg-transparent p-0 text-[30px] ${
                  star <= rating ? "text-[#F5D900]" : "text-[#DCE2EA]"
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <p className="mb-0 mt-1.5 text-xs text-[#738099]">
            {rating.toFixed(1)} / 5.0
          </p>
        </section>

        <section className="rounded-xl border border-[#E1E7F0] bg-white p-4">
          <h2 id="recommend-label" className="mb-3 mt-0 text-[15px] font-bold">
            추천 여부
          </h2>
          <div
            role="group"
            aria-labelledby="recommend-label"
            className="flex gap-2"
          >
            {[
              { label: "추천", value: true },
              { label: "비추천", value: false },
            ].map(({ label, value }) => (
              <button
                key={label}
                type="button"
                aria-pressed={recommended === value}
                onClick={() => setRecommended(value)}
                className={`min-h-9 cursor-pointer rounded-full border px-4 py-1.5 text-[13px] ${
                  recommended === value
                    ? "border-[#202C49] bg-[#202C49] text-white"
                    : "border-[#E1E7F0] bg-white text-[#202C49]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[#E1E7F0] bg-white p-4">
          <h2 className="mb-3 mt-0 text-[15px] font-bold">
            <label htmlFor="review-content">리뷰 내용</label>
          </h2>
          <textarea
            id="review-content"
            value={review}
            onChange={(event) => {
              setReview(event.target.value);
              setMessage("");
            }}
            placeholder="맛있게 먹은 메뉴에 대한 리뷰를 작성해주세요."
            className="block min-h-[190px] w-full box-border resize-y rounded-[10px] border border-[#E1E7F0] bg-[#F7F9FC] p-3.5 text-[13px] leading-[1.6] text-[#202C49] outline-none"
          />
        </section>

        <div className="pt-1">
          {message && (
            <p role="status" className="mb-3 mt-0 text-[13px] leading-[1.5] text-[#44516A]">
              {message}
            </p>
          )}
          <button
            type="submit"
            className="min-h-12 w-full cursor-pointer rounded-lg border-0 bg-[#202C49] text-[15px] font-bold text-white"
          >
            리뷰 등록
          </button>
        </div>
      </form>
    </main>
  );
}
