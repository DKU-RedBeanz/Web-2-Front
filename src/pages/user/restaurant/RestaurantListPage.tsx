"use client";

import { useRef, useState } from "react";
import { ArrowLeft, Heart, House, Search, Star, UserRound } from "lucide-react";

interface Restaurant {
  id: number;
  name: string;
  location: string;
  category: string;
  tags: string[];
  rating: number;
  likes: number;
  price: string;
}

interface RestaurantListPageProps {
  onSelectRestaurant?: (restaurant: Restaurant) => void;
  onNavigate?: (id: string) => void;
}

interface NavItem {
  id: string;
  label: string;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "정든식당",
    location: "대학로 입구 · 5분 거리",
    category: "한식",
    tags: ["한식", "가성비", "양많음"],
    rating: 4.9,
    likes: 1284,
    price: "12,000원 ~ 18,000원",
  },
  {
    id: 2,
    name: "오늘의 초밥",
    location: "학교 정문 · 3분 거리",
    category: "일식",
    tags: ["일식", "혼밥", "신선함"],
    rating: 4.8,
    likes: 956,
    price: "10,000원 ~ 20,000원",
  },
  {
    id: 3,
    name: "라온 카페",
    location: "학교 후문 · 7분 거리",
    category: "카페",
    tags: ["카페", "디저트", "조용함"],
    rating: 4.7,
    likes: 742,
    price: "4,500원 ~ 8,000원",
  },
];

const categories = ["전체", "한식", "일식", "카페"];

const navigation: NavItem[] = [
  { id: "home", label: "홈" },
  { id: "search", label: "검색" },
  { id: "favorites", label: "찜" },
  { id: "my", label: "MY" },
];

function NavIcon({ name }: { name: string }) {
  const iconProps = {
    size: 24,
    strokeWidth: 1.7,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "home":
      return <House {...iconProps} />;
    case "search":
      return <Search {...iconProps} />;
    case "favorites":
      return <Heart {...iconProps} />;
    case "my":
      return <UserRound {...iconProps} />;
    default:
      return null;
  }
}

export default function RestaurantListPage({
  onSelectRestaurant,
  onNavigate,
}: RestaurantListPageProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  const [keyword, setKeyword] = useState<string>("");
  const [category, setCategory] = useState<string>("전체");
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [activeNav, setActiveNav] = useState<string>("search");

  const onlyLiked = activeNav === "favorites";

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const searchText = [
      restaurant.name,
      restaurant.location,
      ...restaurant.tags,
    ].join(" ");

    return (
      searchText.includes(keyword.trim()) &&
      (category === "전체" || restaurant.category === category) &&
      (!onlyLiked || likedIds.includes(restaurant.id))
    );
  });

  function toggleLike(id: number) {
    setLikedIds((previous) =>
      previous.includes(id)
        ? previous.filter((likedId) => likedId !== id)
        : [...previous, id]
    );
  }

  function handleNavigation(id: string) {
    if (id === "home" || id === "my") {
      if (onNavigate) {
        onNavigate(id);
      } else {
        window.location.assign(id === "home" ? "/" : "/mypage");
      }
      return;
    }

    setActiveNav(id);

    if (id === "search") {
      searchRef.current?.focus();
    }
  }

  return (
    <div className="flex flex-col bg-[#F7F9FC] font-[Arial,sans-serif] text-[#202C49]">
      <header className="flex items-center gap-3 px-5 py-6">
        <button
          type="button"
          aria-label="뒤로 가기"
          onClick={() => window.history.back()}
          className="cursor-pointer border-0 bg-transparent text-[28px] text-[#202C49]"
        >
          <ArrowLeft size={24} strokeWidth={1.8} aria-hidden="true" />
        </button>

        <h1 className="m-0 text-base font-bold">식당 리스트</h1>
      </header>

      <div className="flex-1 px-5 pb-6">
        <label className="flex items-center gap-2 rounded-[10px] border border-[#E1E7F0] bg-white px-3 text-[#7A8599]">
          <NavIcon name="search" />

          <input
            ref={searchRef}
            type="search"
            aria-label="식당 및 맛집 검색"
            placeholder="식당 및 맛집 검색"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            className="min-h-11 w-full min-w-0 border-0 bg-transparent text-[13px] text-[#202C49] outline-none placeholder:text-[#7A8599]"
          />
        </label>

        <div
          role="group"
          aria-label="식당 카테고리"
          className="my-4 mb-5 flex flex-wrap gap-2"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`min-h-9 cursor-pointer rounded-full border px-4 py-1.5 ${
                category === item
                  ? "border-[#202C49] bg-[#202C49] text-white"
                  : "border-[#E1E7F0] bg-white text-[#526079]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mb-3 flex items-center justify-between">
          <h2 className="m-0 text-base">
            {onlyLiked ? "찜한 맛집" : "추천 맛집"}
          </h2>

          <span className="text-xs text-[#738099]">
            {filteredRestaurants.length}개
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {filteredRestaurants.map((restaurant) => {
            const isLiked = likedIds.includes(restaurant.id);

            return (
              <article
                key={restaurant.id}
                className="overflow-hidden rounded-xl border border-[#E1E7F0] bg-white p-[10px]"
              >
                <div className="relative grid h-40 place-items-center rounded-[10px] bg-[#F7F9FC] text-xs text-[#738099]">
                  <span className="absolute left-3 top-3 rounded-xl bg-white px-[9px] py-1 text-[11px] text-[#202C49]">
                    인기
                  </span>
                  <span className="absolute right-3 top-3 rounded-xl bg-[#202C49] px-[9px] py-1 text-[11px] text-white">
                    {restaurant.rating.toFixed(1)}
                  </span>
                  가게 사진
                </div>

                <div className="px-0.5 pt-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="m-0 text-base">
                      {onSelectRestaurant ? (
                        <button
                          type="button"
                          onClick={() => onSelectRestaurant(restaurant)}
                          className="cursor-pointer border-0 bg-transparent p-0 text-left font-inherit text-inherit"
                        >
                          {restaurant.name}
                        </button>
                      ) : (
                        restaurant.name
                      )}
                    </h3>

                    <span className="whitespace-nowrap text-xs">
                      <Star
                        size={13}
                        strokeWidth={1.8}
                        fill="currentColor"
                        className="inline-block text-[#EBC900]"
                        aria-hidden="true"
                      />{" "}
                      {restaurant.rating.toFixed(1)}
                    </span>
                  </div>

                  <p className="my-1.5 mb-2.5 text-xs text-[#738099]">
                    {restaurant.location}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {restaurant.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xl bg-[#F7F9FC] px-2 py-1 text-[11px] text-[#526079]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2.5 flex items-center justify-between gap-2">
                    <span className="text-xs text-[#738099]">
                      {restaurant.price}
                    </span>

                    <button
                      type="button"
                      aria-label={`${restaurant.name} 찜하기`}
                      aria-pressed={isLiked}
                      onClick={() => toggleLike(restaurant.id)}
                      className={`min-h-9 cursor-pointer border-0 bg-transparent p-1 text-xs ${
                        isLiked ? "text-[#DC5268]" : "text-[#526079]"
                      }`}
                    >
                      <Heart
                        size={16}
                        strokeWidth={1.8}
                        fill={isLiked ? "currentColor" : "none"}
                        aria-hidden="true"
                        className="inline-block align-[-3px]"
                      />{" "}
                      {(restaurant.likes + (isLiked ? 1 : 0)).toLocaleString(
                        "ko-KR"
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}

          {filteredRestaurants.length === 0 && (
            <p
              role="status"
              className="py-10 text-center text-sm text-[#738099]"
            >
              {onlyLiked
                ? "조건에 맞는 찜한 식당이 없습니다."
                : "검색 조건에 맞는 식당이 없습니다."}
            </p>
          )}
        </div>
      </div>

      <nav
        aria-label="하단 메뉴"
        className="sticky bottom-0 z-10 grid grid-cols-4 border-t border-[#E1E7F0] bg-white px-2 pt-2 pb-[max(12px,env(safe-area-inset-bottom))]"
      >
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-current={activeNav === item.id ? "page" : undefined}
            onClick={() => handleNavigation(item.id)}
            className={`flex min-h-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-lg border-0 bg-transparent text-[11px] ${
              activeNav === item.id
                ? "font-bold text-[#202C49]"
                : "text-[#7A8599]"
            }`}
          >
            <NavIcon name={item.id} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
