"use client";

import { useState } from "react";
import React from "react";

export default function ReviewPage() {
  const [rating, setRating] = useState(5);
  const [recommended, setRecommended] = useState(true);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!review.trim()) {
      setMessage("리뷰 내용을 입력해주세요.");
      return;
    }

    setMessage("리뷰 입력이 완료되었습니다. 아직 서버에는 저장되지 않습니다.");
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
        <h1 style={styles.title}>리뷰 작성</h1>
      </header>

      <form onSubmit={handleSubmit} style={styles.form}>
        <section style={styles.card}>
          <h2 style={styles.heading}>리뷰 대상</h2>

          <div style={styles.product}>
            <div style={styles.photo}>음식 사진</div>
            <div>
              <strong style={styles.productName}>음식 이름</strong>
              <p style={styles.description}>정든식당 · 8,500원</p>
            </div>
          </div>
        </section>

        <section style={styles.card}>
          <h2 id="rating-label" style={styles.heading}>별점</h2>

          <div
            role="group"
            aria-labelledby="rating-label"
            style={styles.stars}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                aria-label={`${star}점`}
                aria-pressed={rating === star}
                onClick={() => setRating(star)}
                style={{
                  ...styles.star,
                  color: star <= rating ? "#F5D900" : "#DCE2EA",
                }}
              >
                ★
              </button>
            ))}
          </div>

          <p style={styles.description}>{rating.toFixed(1)} / 5.0</p>
        </section>

        <section style={styles.card}>
          <h2 id="recommend-label" style={styles.heading}>추천 여부</h2>

          <div
            role="group"
            aria-labelledby="recommend-label"
            style={styles.options}
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
                style={{
                  ...styles.option,
                  ...(recommended === value ? styles.activeOption : {}),
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        <section style={styles.card}>
          <h2 style={styles.heading}>
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
            style={styles.textarea}
          />
        </section>

        <div style={styles.footer}>
          {message && (
            <p role="status" style={styles.message}>{message}</p>
          )}
          <button type="submit" style={styles.submitButton}>
            리뷰 등록
          </button>
        </div>
      </form>
    </main>
  );
}

const styles = {
  page: {
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: "8px 20px 24px",
  },
  card: {
    padding: 16,
    background: "#FFFFFF",
    border: "1px solid #E1E7F0",
    borderRadius: 12,
  },
  heading: {
    margin: "0 0 12px",
    fontSize: 15,
    fontWeight: 700,
  },
  product: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  photo: {
    display: "grid",
    placeItems: "center",
    width: 60,
    height: 60,
    borderRadius: 10,
    background: "#F7F9FC",
    color: "#738099",
    fontSize: 10,
    flexShrink: 0,
  },
  productName: {
    fontSize: 15,
  },
  description: {
    margin: "6px 0 0",
    color: "#738099",
    fontSize: 12,
  },
  stars: {
    display: "flex",
    gap: 4,
  },
  star: {
    width: 40,
    height: 44,
    padding: 0,
    border: 0,
    background: "transparent",
    fontSize: 30,
    cursor: "pointer",
  },
  options: {
    display: "flex",
    gap: 8,
  },
  option: {
    minHeight: 36,
    padding: "6px 16px",
    border: "1px solid #E1E7F0",
    borderRadius: 20,
    background: "#FFFFFF",
    color: "#202C49",
    fontSize: 13,
    cursor: "pointer",
  },
  activeOption: {
    borderColor: "#202C49",
    background: "#202C49",
    color: "#FFFFFF",
  },
  textarea: {
    display: "block",
    boxSizing: "border-box",
    width: "100%",
    minHeight: 190,
    padding: 14,
    border: "1px solid #E1E7F0",
    borderRadius: 10,
    background: "#F7F9FC",
    color: "#202C49",
    fontFamily: "inherit",
    fontSize: 13,
    lineHeight: 1.6,
    resize: "vertical",
  },
  footer: {
    paddingTop: 4,
  },
  message: {
    margin: "0 0 12px",
    color: "#44516A",
    fontSize: 13,
    lineHeight: 1.5,
  },
  submitButton: {
    width: "100%",
    minHeight: 48,
    border: 0,
    borderRadius: 8,
    background: "#202C49",
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
  },
} satisfies Record<string, React.CSSProperties>;