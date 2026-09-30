<div align="center">

# 📝 React Task App  
React + TypeScript + Vite  
🔥 Auto Deploy to Firebase Hosting

<br/>

![badge-react](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=white)
![badge-ts](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white)
![badge-vite](https://img.shields.io/badge/Vite-7.0-646cff?style=for-the-badge&logo=vite&logoColor=white)
![badge-firebase](https://img.shields.io/badge/Firebase_Hosting-Auto_Deploy-ffca28?style=for-the-badge&logo=firebase&logoColor=white)

<br/>

🔗 **배포 URL:**  
👉 https://react-test-app-2-e01ed.web.app/

</div>

---

## 📌 프로젝트 소개

React + TypeScript + Vite로 만든 **작업(Task) 관리 웹 애플리케이션**입니다.  
Redux 기반 상태 관리와 여러 컴포넌트 구조를 사용해 확장성 있게 구성했습니다.

Firebase Hosting + GitHub Actions를 이용하여  
**main 브랜치에 push하면 자동으로 배포되는 CI/CD 환경**이 구축되어 있습니다.

---

## 🚀 사용된 기술 스택

### Frontend
- React 19
- TypeScript
- Vite
- Redux Toolkit
- Vanilla Extract (스타일 시스템)
- ESLint + Prettier
- React Hooks 구조

### Backend / 인증
- Firebase Authentication (Google 로그인)

### DevOps / 배포
- Firebase Hosting
- GitHub Actions (자동 배포 설정)
- Vite Production Build

---

## 💡 주요 기능

- ✔ 작업(Task) 추가 / 삭제 / 수정  
- ✔ 보드/리스트 구조 기반 상태 관리  
- ✔ Redux Toolkit 기반 데이터 흐름  
- ✔ Vanilla Extract 기반 CSS  
- ✔ 실시간 자동 빌드 + Vite HMR  
- ✔ Firebase Hosting 자동 배포 (CI/CD)  
- ✔ Google 로그인 / 로그아웃 (새로고침 후에도 로그인 유지)

---

## 🔐 로그인 상태 관리 구조

| 저장 위치 | 저장 내용 | 새로고침 시 |
|---|---|---|
| Redux (메모리) | `email`, `id` | 초기화됨 |
| 브라우저 IndexedDB (`firebaseLocalStorageDb`) | Firebase 로그인 토큰 | 유지됨 |

새로고침하면 Redux는 초기화되지만, `onAuthStateChanged`가 IndexedDB에 남아 있는 Firebase 로그인 정보를 읽어 Redux에 다시 넣어줍니다.

> 콘솔의 `Cross-Origin-Opener-Policy policy would block the window.close call` 경고는 `signInWithPopup` 사용 시 Chrome에서 나타나는 경고로, 로그인 동작에는 영향이 없습니다.

---

## 🔧 설치 및 실행

```bash
# 개발 서버 실행
npm install
npm run dev

# 프로덕션 빌드
npm run build

# 로컬에서 배포 버전 미리보기
npm run preview
```

---

## ☁ Firebase 배포

이 프로젝트는 GitHub Actions를 통해 자동 배포됩니다.

**배포 방식**

main 브랜치에 push → GitHub Actions 실행 → Firebase Hosting 업로드

설정 파일: `.github/workflows/firebase-hosting-merge.yml`

---

## 📝 업데이트 기록

### 2026-10-01
- **로그인 유지 수정:** `onAuthStateChanged`를 추가해 새로고침/재방문 시에도 로그인 상태가 유지되도록 수정 (`BoardList.tsx`)
- **로그인 팝업 닫기 처리:** 사용자가 로그인 팝업을 닫은 경우 콘솔 에러로 처리하지 않도록 변경
- **TypeScript 6 대비:** 폐지 예정인 `baseUrl` 옵션 제거, `paths`를 `./src/*` 기준으로 변경 (`tsconfig.json`, `tsconfig.app.json`)
- **Firebase Hosting 정책 변경 확인:** 2026-10-15부터 새 프로젝트는 기본 호스팅 사이트가 자동 생성되지 않지만, 이 프로젝트는 기존 프로젝트에 배포하므로 영향 없음

---

## 🧑‍💻 Author

yunsuper  
GitHub: https://github.com/yunsuper