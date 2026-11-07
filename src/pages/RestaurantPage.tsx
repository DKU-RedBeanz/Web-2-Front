"use client";

import { useState } from "react";
import React from "react";

interface Menu {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface RestaurantDetailPageProps {
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
}: RestaurantDetailPageProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

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

        <h1 style={styles.title}>식당 정보</h1>
      </header>

      <div style={styles.content}>
        <div style={styles.hero}>
          <span style={styles.popularBadge}>인기 맛집</span>

          <span style={styles.ratingBadge}>
            {restaurant.rating.toFixed(1)}
          </span>

          <span style={styles.placeholderText}>가게 사진</span>
        </div>

        <section aria-label="식당 기본 정보" style={styles.summary}>
          <h2 style={styles.restaurantName}>{restaurant.name}</h2>

          <p style={styles.metadata}>
            {restaurant.location} · {restaurant.tags.join(" · ")}
          </p>

          <div style={styles.stats}>
            <div style={styles.stat}>
              <span style={styles.statLabel}>평점</span>
              <strong style={styles.statValue}>
                <span style={styles.star}>★</span>
                {" "}
                {restaurant.rating.toFixed(1)}
              </strong>
            </div>

            <div style={styles.stat}>
              <span style={styles.statLabel}>리뷰</span>
              <strong style={styles.statValue}>
                {restaurant.reviewCount.toLocaleString("ko-KR")}
              </strong>
            </div>

            <button
              type="button"
              aria-label={`${restaurant.name} 찜하기`}
              aria-pressed={isLiked}
              onClick={() => setIsLiked((previous) => !previous)}
              style={{
                ...styles.stat,
                ...styles.likeButton,
                ...(isLiked ? styles.likedStat : {}),
              }}
            >
              <span style={styles.statLabel}>
                {isLiked ? "♥ 찜했어요" : "♡ 찜"}
              </span>
              <strong style={styles.statValue}>
                {(restaurant.likes + (isLiked ? 1 : 0))
                  .toLocaleString("ko-KR")}
              </strong>
            </button>
          </div>
        </section>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>식당 소개</h2>
          <p style={styles.description}>{restaurant.description}</p>
        </section>

        <section style={styles.card}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>인기 메뉴</h2>

            {onViewAllMenus && (
              <button
                type="button"
                onClick={onViewAllMenus}
                style={styles.viewAllButton}
              >
                전체 보기 ›
              </button>
            )}
          </div>

          <div style={styles.menuList}>
            {menus.map((menu) => (
              <article key={menu.id} style={styles.menuItem}>
                <div style={styles.menuPhoto}>음식 사진</div>

                <div style={styles.menuInfo}>
                  <h3 style={styles.menuName}>
                    {onSelectMenu ? (
                      <button
                        type="button"
                        onClick={() => onSelectMenu(menu)}
                        style={styles.menuNameButton}
                      >
                        {menu.name}
                        <span aria-hidden="true"> ›</span>
                      </button>
                    ) : (
                      menu.name
                    )}
                  </h3>

                  <p style={styles.menuDescription}>
                    {menu.description}
                  </p>

                  <p style={styles.menuPrice}>
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

const styles = {
  page: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: 402,
    minHeight: "100dvh",
    margin: "0 auto",
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
  title: {
    margin: 0,
    fontSize: 16,
    fontWeight: 700,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: "0 20px 32px",
  },
  hero: {
    position: "relative",
    display: "grid",
    placeItems: "center",
    height: 220,
    borderRadius: 12,
    background: "#FFFFFF",
  },
  popularBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: 12,
    fontWeight: 700,
  },
  ratingBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    padding: "5px 10px",
    borderRadius: 20,
    background: "#202C49",
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: 700,
  },
  placeholderText: {
    color: "#738099",
    fontSize: 13,
  },
  summary: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  restaurantName: {
    margin: 0,
    fontSize: 22,
    fontWeight: 700,
  },
  metadata: {
    margin: 0,
    color: "#738099",
    fontSize: 12,
    lineHeight: 1.6,
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 8,
    marginTop: 4,
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 6,
    minWidth: 0,
    padding: "12px 10px",
    border: "1px solid #E1E7F0",
    borderRadius: 10,
    background: "#FFFFFF",
    color: "#202C49",
  },
  statLabel: {
    color: "#738099",
    fontSize: 11,
  },
  statValue: {
    fontSize: 14,
    fontWeight: 700,
  },
  star: {
    color: "#EBC900",
  },
  likeButton: {
    fontFamily: "inherit",
    textAlign: "left",
    cursor: "pointer",
  },
  likedStat: {
    borderColor: "#D95B73",
    background: "#FFF7F9",
    color: "#B93D57",
  },
  card: {
    padding: 16,
    border: "1px solid #E1E7F0",
    borderRadius: 12,
    background: "#FFFFFF",
  },
  sectionTitle: {
    margin: 0,
    fontSize: 16,
    fontWeight: 700,
  },
  description: {
    margin: "12px 0 0",
    color: "#64718A",
    fontSize: 13,
    lineHeight: 1.8,
    overflowWrap: "anywhere",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 16,
  },
  viewAllButton: {
    minHeight: 36,
    padding: "4px 0 4px 8px",
    border: 0,
    background: "transparent",
    color: "#526079",
    fontSize: 12,
    whiteSpace: "nowrap",
    cursor: "pointer",
  },
  menuList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  menuPhoto: {
    display: "grid",
    placeItems: "center",
    width: 80,
    height: 80,
    flexShrink: 0,
    borderRadius: 10,
    background: "#F7F9FC",
    color: "#738099",
    fontSize: 11,
  },
  menuInfo: {
    flex: 1,
    minWidth: 0,
  },
  menuName: {
    margin: 0,
    fontSize: 14,
    overflowWrap: "anywhere",
  },
  menuNameButton: {
    padding: 0,
    border: 0,
    background: "transparent",
    color: "inherit",
    font: "inherit",
    fontWeight: "inherit",
    textAlign: "left",
    cursor: "pointer",
  },
  menuDescription: {
    margin: "6px 0",
    color: "#738099",
    fontSize: 12,
    lineHeight: 1.5,
  },
  menuPrice: {
    margin: 0,
    fontSize: 13,
    fontWeight: 700,
  },
} satisfies Record<string, React.CSSProperties>;