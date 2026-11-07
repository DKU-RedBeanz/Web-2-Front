"use client";

import React from "react";

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

        <h1 style={styles.pageTitle}>메뉴 정보</h1>
      </header>

      <div style={styles.content}>
        <div style={styles.photo}>음식 사진</div>

        <section aria-label="음식 기본 정보" style={styles.summary}>
          <h2 style={styles.menuName}>{menu.name}</h2>

          <div aria-label="음식 특징" style={styles.tags}>
            {menu.tags.map((tag) => (
              <span key={tag} style={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <div style={styles.ratingCard}>
            <span
              aria-label={`5점 만점에 ${menu.rating}점`}
              style={styles.rating}
            >
              <span aria-hidden="true" style={styles.star}>★</span>
              {menu.rating.toFixed(1)}
            </span>

            <span style={styles.muted}>
              {menu.reviewCount == null
                ? "리뷰 수: 확인 중"
                : `리뷰 ${menu.reviewCount.toLocaleString("ko-KR")}개`}
            </span>
          </div>
        </section>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>음식 소개</h2>
          <p style={styles.bodyText}>{menu.description}</p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>재료·알레르기</h2>

          <dl style={styles.infoList}>
            <div style={styles.infoItem}>
              <dt style={styles.infoLabel}>주요 재료</dt>
              <dd style={styles.infoValue}>
                {menu.ingredients || "식당 확인 후 안내"}
              </dd>
            </div>

            <div style={styles.infoItem}>
              <dt style={styles.infoLabel}>알레르기 정보</dt>
              <dd style={styles.infoValue}>
                {menu.allergens || "식당 확인 후 안내"}
              </dd>
            </div>
          </dl>
        </section>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>짧은 리뷰</h2>

          <article style={styles.review}>
            <div style={styles.reviewHeader}>
              <h3 style={styles.author}>{review.author}</h3>
              <span style={styles.muted}>{review.time}</span>
            </div>

            <p
              aria-label={`5점 만점에 ${review.rating}점`}
              style={styles.reviewRating}
            >
              <span aria-hidden="true" style={styles.star}>★</span>
              {review.rating.toFixed(1)}
            </p>

            <p style={styles.reviewContent}>{review.content}</p>
          </article>
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
    color: "#1E2A44",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "20px 16px",
  },
  backButton: {
    display: "grid",
    placeItems: "center",
    width: 32,
    height: 40,
    padding: 0,
    border: 0,
    borderRadius: 8,
    background: "transparent",
    color: "#1E2A44",
    fontSize: 28,
    cursor: "pointer",
  },
  pageTitle: {
    margin: 0,
    fontSize: 16,
    fontWeight: 700,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: "0 16px max(32px, env(safe-area-inset-bottom))",
  },
  photo: {
    display: "grid",
    placeItems: "center",
    height: 220,
    border: "1px solid #E2E7EF",
    borderRadius: 12,
    background: "#FFFFFF",
    color: "#667085",
    fontSize: 14,
  },
  summary: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  menuName: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    padding: "6px 10px",
    border: "1px solid #E2E7EF",
    borderRadius: 999,
    background: "#F8FAFC",
    fontSize: 12,
    fontWeight: 600,
  },
  ratingCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
    padding: 16,
    border: "1px solid #E2E7EF",
    borderRadius: 12,
    background: "#FFFFFF",
  },
  rating: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 14,
    fontWeight: 700,
  },
  star: {
    color: "#EBC900",
    fontSize: 18,
  },
  muted: {
    color: "#667085",
    fontSize: 12,
  },
  card: {
    padding: 16,
    border: "1px solid #E2E7EF",
    borderRadius: 12,
    background: "#FFFFFF",
  },
  sectionTitle: {
    margin: 0,
    fontSize: 16,
    fontWeight: 700,
  },
  bodyText: {
    margin: "10px 0 0",
    color: "#374151",
    fontSize: 14,
    lineHeight: 1.6,
    overflowWrap: "anywhere",
  },
  infoList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    margin: "16px 0 0",
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: 600,
  },
  infoValue: {
    margin: 0,
    color: "#667085",
    fontSize: 14,
    lineHeight: 1.5,
  },
  review: {
    marginTop: 16,
  },
  reviewHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  author: {
    margin: 0,
    fontSize: 14,
    fontWeight: 700,
  },
  reviewRating: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    margin: "8px 0",
    fontSize: 13,
    fontWeight: 700,
  },
  reviewContent: {
    margin: 0,
    color: "#374151",
    fontSize: 14,
    lineHeight: 1.6,
    overflowWrap: "anywhere",
  },
} satisfies Record<string, React.CSSProperties>;