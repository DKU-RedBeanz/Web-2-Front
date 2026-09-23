# 레드빈즈 웹개발 프로젝트 2팀 — 프론트엔드

학교 주변 맛집·식당 정보를 찾고, 이용 경험을 리뷰와 평점으로 공유하는 서비스의 프론트엔드 저장소입니다.

## 프로젝트 정보

- 상태: 초기 구성 중·미릴리스
- 핵심 영역: 학교, 식당, 리뷰·평점, 사용자
- 담당: **조예찬**
- 라이선스: [MIT](LICENSE)

| 항목 | 구성 방향 |
|---|---|
| UI | React — 구성 예정 |
| 화면 라우팅 | react-router-dom — 구성 예정 |
| 언어·빌드 도구 | 초기 프로젝트 구성 시 멘토와 확정 |
| Node.js·패키지 관리자·라이브러리 버전 | 초기 프로젝트 구성 시 기록 |

## Sprint 1

팀 마감: **2026-09-23(수)**. 상세 범위와 제출물은 [프론트 Sprint 1](https://github.com/DKU-RedBeanz/Web-2-Front/wiki/Sprint-1) 및 각 이슈를 확인합니다.

- [와이어프레임 설계 (#1)](https://github.com/DKU-RedBeanz/Web-2-Front/issues/1)
- [React Router 기반 프로젝트 및 페이지 뼈대 구성 (#2)](https://github.com/DKU-RedBeanz/Web-2-Front/issues/2)

학교 선택 → 식당 목록 → 식당 상세 → 리뷰 작성 흐름을 참고하여 화면 구성을 정하고 URL Path로 연결합니다. 상세 스타일링 전 단계로, 빈 페이지에 **제목·페이지 설명·이동 버튼**만 추가합니다. 이번에는 실제 API·인증·리뷰 저장·DB 연결을 구현하지 않습니다.

## 실행 방법

현재 저장소에는 문서·템플릿만 있으며 실행 가능한 앱은 아직 없습니다. 초기 프로젝트 PR에서 확정한 버전, 의존성 설치·실행·빌드 명령을 이곳에 추가합니다. [로컬 개발 안내](https://github.com/DKU-RedBeanz/Web-2-Front/wiki/Local-Development)를 참고합니다.

프론트에서 MySQL에 직접 연결하지 않으며 DB 접속 정보나 비밀키를 코드·브라우저에 전달하지 않습니다. 백엔드의 `.env`를 프론트로 복사하지 않습니다.

## 협업 안내

이슈 → 담당자 지정 → 브랜치 → PR → 리뷰 → 병합 순서로 진행합니다. 모르는 부분은 언제든 질문하고 AI를 활용해도 됩니다. 도움받은 결과는 직접 확인하고 주요 동작을 설명합니다.

- [프론트 위키](https://github.com/DKU-RedBeanz/Web-2-Front/wiki) · [Process](https://github.com/DKU-RedBeanz/Web-2-Front/wiki/Assignments)
- [Git 컨벤션](https://github.com/DKU-RedBeanz/Web-2-Front/wiki/Git-Convention) · [작업 및 코드 리뷰 절차](https://github.com/DKU-RedBeanz/Web-2-Front/wiki/Work-and-Review)
- [팀 공통 요구사항 초안](https://github.com/DKU-RedBeanz/Web-2-Back/wiki/Requirements)
- [백엔드 Sprint 1](https://github.com/DKU-RedBeanz/Web-2-Back/wiki/Sprint-1) · [백엔드 저장소](https://github.com/DKU-RedBeanz/Web-2-Back)
- [Issue 템플릿](.github/ISSUE_TEMPLATE/task.md) · [PR 템플릿](.github/pull_request_template.md)
