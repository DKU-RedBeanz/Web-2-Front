"use client";

import { ArrowLeft, Star } from "lucide-react";

interface MenuData {
  name: string;
  rating: number;
  reviewCount: number | null;
  tags: string[];
  description: string;
  ingredients: string | null;
  allergens: string | null;
}

interface ReviewData {
  author: string;
  rating: number;
  time: string;
  content: string;
}

const menu: MenuData = {
  name: "음식 이름",
  rating: 4.9,
  reviewCount: null,
  tags: ["담백한 맛", "든든한 한 끼", "인기 메뉴"],
  description:
    "담백한 맛과 풍부한 재료가 조화로운 메뉴입니다. 양이 충분해 점심 한 끼로도 만족스럽고, 깊은 불고기 맛과 비리지 않는 밥이 매력적인 메뉴입니다.",
  ingredients: null,
  allergens: null,
};

const review: ReviewData = {
  author: "캠퍼스 한입",
  rating: 5.0,
  time: "1시간 전",
  content:
    "양이 많아서 점심으로 딱 좋았어요. 불고기 맛이 깊고 밥이 비리지도 않아서 다음에도 또 주문하고 싶은 메뉴입니다.",
};

export default function MenuDetailPage() {
  return (
    <main className="mx-auto box-border min-h-dvh w-full max-w-[402px] bg-[#F7F9FC] font-[Arial,sans-serif] text-[#1E2A44]">
      <header className="flex items-center gap-3 px-4 py-5">
        <button
          type="button"
          aria-label="뒤로 가기"
          onClick={() => window.history.back()}
          className="grid h-10 w-8 cursor-pointer place-items-center rounded-lg border-0 bg-transparent p-0 text-[#1E2A44]"
        >
          <ArrowLeft size={22} strokeWidth={2} />
        </button>

        <h1 className="m-0 text-base font-bold">메뉴 정보</h1>
      </header>

      <div className="flex flex-col gap-4 px-4 pb-[max(32px,env(safe-area-inset-bottom))]">
        <div className="grid h-[220px] place-items-center rounded-xl border border-[#E2E7EF] bg-white text-sm text-[#667085]">
          음식 사진
        </div>

        <section
          aria-label="음식 기본 정보"
          className="flex flex-col gap-3"
        >
          <h2 className="m-0 text-xl font-bold">{menu.name}</h2>

          <div aria-label="음식 특징" className="flex flex-wrap gap-2">
            {menu.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#E2E7EF] bg-[#F8FAFC] px-2.5 py-1.5 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#E2E7EF] bg-white p-4">
            <span
              aria-label={`5점 만점에 ${menu.rating}점`}
              className="inline-flex items-center gap-2 text-sm font-bold"
            >
              <Star
                aria-hidden="true"
                size={18}
                fill="#EBC900"
                color="#EBC900"
              />
              {menu.rating.toFixed(1)}
            </span>

            <span className="text-xs text-[#667085]">
              {menu.reviewCount == null
                ? "리뷰 수: 확인 중"
                : `리뷰 ${menu.reviewCount.toLocaleString("ko-KR")}개`}
            </span>
          </div>
        </section>

        <section className="rounded-xl border border-[#E2E7EF] bg-white p-4">
          <h2 className="m-0 text-base font-bold">음식 소개</h2>
          <p className="mb-0 mt-2.5 break-words text-sm leading-[1.6] text-[#374151]">
            {menu.description}
          </p>
        </section>

        <section className="rounded-xl border border-[#E2E7EF] bg-white p-4">
          <h2 className="m-0 text-base font-bold">재료·알레르기</h2>

          <dl className="mt-4 mb-0 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <dt className="text-[13px] font-semibold">주요 재료</dt>
              <dd className="m-0 text-sm leading-[1.5] text-[#667085]">
                {menu.ingredients || "식당 확인 후 안내"}
              </dd>
            </div>

            <div className="flex flex-col gap-1">
              <dt className="text-[13px] font-semibold">알레르기 정보</dt>
              <dd className="m-0 text-sm leading-[1.5] text-[#667085]">
                {menu.allergens || "식당 확인 후 안내"}
              </dd>
            </div>
          </dl>
        </section>

        <section className="rounded-xl border border-[#E2E7EF] bg-white p-4">
          <h2 className="m-0 text-base font-bold">짧은 리뷰</h2>

          <article className="mt-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="m-0 text-sm font-bold">{review.author}</h3>
              <span className="text-xs text-[#667085]">{review.time}</span>
            </div>

            <p
              aria-label={`5점 만점에 ${review.rating}점`}
              className="my-2 flex items-center gap-1.5 text-[13px] font-bold"
            >
              <Star
                aria-hidden="true"
                size={16}
                fill="#EBC900"
                color="#EBC900"
              />
              {review.rating.toFixed(1)}
            </p>

            <p className="m-0 break-words text-sm leading-[1.6] text-[#374151]">
              {review.content}
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
