"use client";

import { useRef, useState } from "react";
import React from "react";

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
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "home" && (
        <>
          <path d="M3 10 12 3l9 7" />
          <path d="M5 9v12h5v-7h4v7h5V9" />
        </>
      )}

      {name === "search" && (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </>
      )}

      {name === "favorites" && (
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
      )}

      {name === "my" && (
        <>
          <circle cx="12" cy="7" r="4" />
          <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
        </>
      )}
    </svg>
  );
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
    <main style={styles.page}>
      <header style={styles.header}>
        <button
          type="button"
          aria-label="뒤로 가기"
          onClick={() => window.history.back()}
          style={styles.backButton}
        >
          ‹
        </button>

        <h1 style={styles.title}>식당 리스트</h1>
      </header>

      <div style={styles.content}>
        <label style={styles.searchBox}>
          <NavIcon name="search" />

          <input
            ref={searchRef}
            type="search"
            aria-label="식당 및 맛집 검색"
            placeholder="식당 및 맛집 검색"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            style={styles.searchInput}
          />
        </label>

        <div
          role="group"
          aria-label="식당 카테고리"
          style={styles.categories}
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              style={{
                ...styles.chip,
                ...(category === item ? styles.activeChip : {}),
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div style={styles.listHeader}>
          <h2 style={styles.sectionTitle}>
            {onlyLiked ? "찜한 맛집" : "추천 맛집"}
          </h2>

          <span style={styles.count}>
            {filteredRestaurants.length}개
          </span>
        </div>

        <div style={styles.list}>
          {filteredRestaurants.map((restaurant) => {
            const isLiked = likedIds.includes(restaurant.id);

            return (
              <article key={restaurant.id} style={styles.card}>
                <div style={styles.photo}>
                  <span style={styles.popularBadge}>인기</span>
                  <span style={styles.ratingBadge}>
                    {restaurant.rating.toFixed(1)}
                  </span>
                  가게 사진
                </div>

                <div style={styles.cardBody}>
                  <div style={styles.nameRow}>
                    <h3 style={styles.restaurantName}>
                      {onSelectRestaurant ? (
                        <button
                          type="button"
                          onClick={() => onSelectRestaurant(restaurant)}
                          style={styles.nameButton}
                        >
                          {restaurant.name}
                        </button>
                      ) : (
                        restaurant.name
                      )}
                    </h3>

                    <span style={styles.rating}>
                      <span style={styles.star}>★</span>
                      {" "}
                      {restaurant.rating.toFixed(1)}
                    </span>
                  </div>

                  <p style={styles.location}>{restaurant.location}</p>

                  <div style={styles.tags}>
                    {restaurant.tags.map((tag) => (
                      <span key={tag} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={styles.cardFooter}>
                    <span style={styles.price}>{restaurant.price}</span>

                    <button
                      type="button"
                      aria-label={`${restaurant.name} 찜하기`}
                      aria-pressed={isLiked}
                      onClick={() => toggleLike(restaurant.id)}
                      style={{
                        ...styles.likeButton,
                        color: isLiked ? "#DC5268" : "#526079",
                      }}
                    >
                      <span aria-hidden="true">
                        {isLiked ? "♥" : "♡"}
                      </span>
                      {" "}
                      {(restaurant.likes + (isLiked ? 1 : 0))
                        .toLocaleString("ko-KR")}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}

          {filteredRestaurants.length === 0 && (
            <p role="status" style={styles.empty}>
              {onlyLiked
                ? "조건에 맞는 찜한 식당이 없습니다."
                : "검색 조건에 맞는 식당이 없습니다."}
            </p>
          )}
        </div>
      </div>

      <nav aria-label="하단 메뉴" style={styles.bottomNav}>
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-current={activeNav === item.id ? "page" : undefined}
            onClick={() => handleNavigation(item.id)}
            style={{
              ...styles.navButton,
              ...(activeNav === item.id ? styles.activeNav : {}),
            }}
          >
            <NavIcon name={item.id} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </main>
  );
}

const styles = {
  page: {
    width: "100%",
    maxWidth: 402,
    minHeight: "100dvh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    background: "#F7F9FC",
    color: "#202C49",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "24px 20px",
  },
  backButton: {
    border: 0,
    background: "transparent",
    color: "#202C49",
    fontSize: 28,
    cursor: "pointer",
  },
  title: { margin: 0, fontSize: 16, fontWeight: 700 },
  content: { flex: 1, padding: "0 20px 24px" },
  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "0 12px",
    border: "1px solid #E1E7F0",
    borderRadius: 10,
    background: "#FFFFFF",
    color: "#7A8599",
  },
  searchInput: {
    width: "100%",
    minWidth: 0,
    minHeight: 44,
    border: 0,
    background: "transparent",
    color: "#202C49",
    fontFamily: "inherit",
    fontSize: 13,
  },
  categories: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    margin: "16px 0 20px",
  },
  chip: {
    minHeight: 36,
    padding: "6px 16px",
    border: "1px solid #E1E7F0",
    borderRadius: 20,
    background: "#FFFFFF",
    color: "#526079",
    cursor: "pointer",
  },
  activeChip: {
    borderColor: "#202C49",
    background: "#202C49",
    color: "#FFFFFF",
  },
  listHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: { margin: 0, fontSize: 16 },
  count: { color: "#738099", fontSize: 12 },
  list: { display: "flex", flexDirection: "column", gap: 16 },
  card: {
    overflow: "hidden",
    padding: 10,
    border: "1px solid #E1E7F0",
    borderRadius: 12,
    background: "#FFFFFF",
  },
  photo: {
    position: "relative",
    display: "grid",
    placeItems: "center",
    height: 160,
    borderRadius: 10,
    background: "#F7F9FC",
    color: "#738099",
    fontSize: 12,
  },
  popularBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    padding: "4px 9px",
    borderRadius: 12,
    background: "#FFFFFF",
    color: "#202C49",
    fontSize: 11,
  },
  ratingBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    padding: "4px 9px",
    borderRadius: 12,
    background: "#202C49",
    color: "#FFFFFF",
    fontSize: 11,
  },
  cardBody: { padding: "12px 2px 0" },
  nameRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  restaurantName: { margin: 0, fontSize: 16 },
  nameButton: {
    padding: 0,
    border: 0,
    background: "transparent",
    color: "inherit",
    font: "inherit",
    fontWeight: "inherit",
    textAlign: "left",
    cursor: "pointer",
  },
  rating: { fontSize: 12, whiteSpace: "nowrap" },
  star: { color: "#EBC900" },
  location: { margin: "6px 0 10px", color: "#738099", fontSize: 12 },
  tags: { display: "flex", flexWrap: "wrap", gap: 6 },
  tag: {
    padding: "4px 8px",
    borderRadius: 12,
    background: "#F7F9FC",
    color: "#526079",
    fontSize: 11,
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 10,
  },
  price: { color: "#738099", fontSize: 12 },
  likeButton: {
    minHeight: 36,
    padding: 4,
    border: 0,
    background: "transparent",
    fontSize: 12,
    cursor: "pointer",
  },
  empty: {
    padding: "40px 0",
    color: "#738099",
    fontSize: 14,
    textAlign: "center",
  },
  bottomNav: {
    position: "sticky",
    bottom: 0,
    zIndex: 10,
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    padding: "8px 8px max(12px, env(safe-area-inset-bottom))",
    borderTop: "1px solid #E1E7F0",
    background: "#FFFFFF",
  },
  navButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    minHeight: 48,
    border: 0,
    borderRadius: 8,
    background: "transparent",
    color: "#7A8599",
    fontSize: 11,
    cursor: "pointer",
  },
  activeNav: {
    color: "#202C49",
    fontWeight: 700,
  },
} satisfies Record<string, React.CSSProperties>;