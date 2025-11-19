<div align="center">

# 📝 React Task App  
React + TypeScript + Vite  
🔥 Auto Deploy to Firebase Hosting

<br/>

![badge-react](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=white)
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
- React 18
- TypeScript
- Vite
- Redux Toolkit
- Vanilla Extract (스타일 시스템)
- ESLint + Prettier
- React Hooks 구조

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

---

## 🔧 설치 및 실행

### 개발 서버 실행
```bash
npm install
npm run dev

프로덕션 빌드
npm run build

로컬에서 배포 버전 미리보기
npm run preview
```

☁ Firebase 배포

이 프로젝트는 GitHub Actions를 통해 자동 배포됩니다.

배포 방식

main 브랜치에 push → GitHub Actions 실행 → Firebase Hosting 업로드

🧑‍💻 Author

yunsuper
GitHub: https://github.com/yunsuper



.github/workflows/firebase-hosting-merge.yml
에 설정이 들어 있습니다.

