"use client";

import { useState } from "react";
import { ArrowLeft, ChevronRight, Heart, Star } from "lucide-react";

interface Menu {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface RestaurantDetailPage {
  onSelectMenu?: (menu: Menu) => void;
  onViewAllMenus?: () => void;
}

const restaurant = {
  name: "정든식당",
  location: "대학로 입구 · 5분 거리",
  tags: ["한식", "가성비", "양많음"],
  rating: 4.9,
  reviewCount: 1284,
  likes: 1284,
  description:
    "식당 소개가 표시되는 영역입니다. 실제 식당의 소개 문구로 변경해주세요.",
};

const menus: Menu[] = [
  {
    id: 1,
    name: "음식 이름 1",
    description: "메뉴 소개가 표시됩니다.",
    price: 8500,
  },
  {
    id: 2,
    name: "음식 이름 2",
    description: "메뉴 소개가 표시됩니다.",
    price: 9500,
  },
];

export default function RestaurantDetailPage({
  onSelectMenu,
  onViewAllMenus,
}: RestaurantDetailPage) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <main className="mx-auto box-border min-h-dvh w-full max-w-[402px] bg-[#F7F9FC] font-[Arial,sans-serif] text-[#202C49]">
      <header className="flex items-center gap-3 px-5 py-6">
        <button
          type="button"
          aria-label="뒤로 가기"
          onClick={() => window.history.back()}
          className="cursor-pointer border-0 bg-transparent p-0 text-[#202C49]"
        >
          <ArrowLeft size={24} strokeWidth={2} />
        </button>

        <h1 className="m-0 text-base font-bold">식당 정보</h1>
      </header>

      <div className="flex flex-col gap-4 px-5 pb-8">
        <div className="relative grid h-[220px] place-items-center rounded-xl bg-white">
          <span className="absolute left-4 top-4 text-xs font-bold">
            인기 맛집
          </span>

          <span className="absolute right-3 top-3 rounded-full bg-[#202C49] px-2.5 py-[5px] text-xs font-bold text-white">
            {restaurant.rating.toFixed(1)}
          </span>

          <span className="text-[13px] text-[#738099]">가게 사진</span>
        </div>

        <section
          aria-label="식당 기본 정보"
          className="flex flex-col gap-2.5"
        >
          <h2 className="m-0 text-[22px] font-bold">{restaurant.name}</h2>

          <p className="m-0 text-xs leading-[1.6] text-[#738099]">
            {restaurant.location} · {restaurant.tags.join(" · ")}
          </p>

          <div className="mt-1 grid grid-cols-3 gap-2">
            <div className="flex min-w-0 flex-col items-start justify-center gap-1.5 rounded-[10px] border border-[#E1E7F0] bg-white px-2.5 py-3">
              <span className="text-[11px] text-[#738099]">평점</span>
              <strong className="flex items-center gap-1 text-sm font-bold">
                <Star size={14} fill="#EBC900" color="#EBC900" />
                {restaurant.rating.toFixed(1)}
              </strong>
            </div>

            <div className="flex min-w-0 flex-col items-start justify-center gap-1.5 rounded-[10px] border border-[#E1E7F0] bg-white px-2.5 py-3">
              <span className="text-[11px] text-[#738099]">리뷰</span>
              <strong className="text-sm font-bold">
                {restaurant.reviewCount.toLocaleString("ko-KR")}
              </strong>
            </div>

            <button
              type="button"
              aria-label={`${restaurant.name} 찜하기`}
              aria-pressed={isLiked}
              onClick={() => setIsLiked((previous) => !previous)}
              className={`flex min-w-0 cursor-pointer flex-col items-start justify-center gap-1.5 rounded-[10px] border px-2.5 py-3 text-left font-[inherit] ${
                isLiked
                  ? "border-[#D95B73] bg-[#FFF7F9] text-[#B93D57]"
                  : "border-[#E1E7F0] bg-white text-[#202C49]"
              }`}
            >
              <span className="flex items-center gap-1 text-[11px]">
                <Heart
                  size={13}
                  fill={isLiked ? "currentColor" : "none"}
                  strokeWidth={2}
                />
                {isLiked ? "찜했어요" : "찜"}
              </span>
              <strong className="text-sm font-bold">
                {(restaurant.likes + (isLiked ? 1 : 0)).toLocaleString("ko-KR")}
              </strong>
            </button>
          </div>
        </section>

        <section className="rounded-xl border border-[#E1E7F0] bg-white p-4">
          <h2 className="m-0 text-base font-bold">식당 소개</h2>
          <p className="mb-0 mt-3 break-words text-[13px] leading-[1.8] text-[#64718A]">
            {restaurant.description}
          </p>
        </section>

        <section className="rounded-xl border border-[#E1E7F0] bg-white p-4">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="m-0 text-base font-bold">인기 메뉴</h2>

            {onViewAllMenus && (
              <button
                type="button"
                onClick={onViewAllMenus}
                className="flex min-h-9 cursor-pointer items-center gap-1 border-0 bg-transparent py-1 pl-2 pr-0 text-xs text-[#526079] whitespace-nowrap"
              >
                전체 보기
                <ChevronRight size={15} />
              </button>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {menus.map((menu) => (
              <article key={menu.id} className="flex items-center gap-3">
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[10px] bg-[#F7F9FC] text-[11px] text-[#738099]">
                  음식 사진
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="m-0 break-words text-sm">
                    {onSelectMenu ? (
                      <button
                        type="button"
                        onClick={() => onSelectMenu(menu)}
                        className="cursor-pointer border-0 bg-transparent p-0 text-left font-[inherit] text-[#202C49]"
                      >
                        {menu.name}
                        <ChevronRight
                          aria-hidden="true"
                          className="ml-1 inline-block align-middle"
                          size={14}
                        />
                      </button>
                    ) : (
                      menu.name
                    )}
                  </h3>

                  <p className="my-1.5 text-xs leading-[1.5] text-[#738099]">
                    {menu.description}
                  </p>

                  <p className="m-0 text-[13px] font-bold">
                    {menu.price.toLocaleString("ko-KR")}원
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
