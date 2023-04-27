# 엘리스 IoT 스마트팜 프로젝트 - 프론트엔드

## ✏️ Commit Convention

|  태그 이름  |                               설명                               |  검색 키워드  |
| :---------: | :--------------------------------------------------------------: | :-----------: |
|   [FEAT]    |                         새로운 기능 구현                         |    feature    |
|   [PROG]    |                           기능 구현중                            |   progress    |
|  [IMPROVE]  |           codding/commit convention 및 코드 구조 수정            |   structure   |
|    [ADD]    |      라이브러리 추가, 파일 생성, dependency 및 config 추가       |      add      |
|    [DEL]    | 쓰지 않는 코드, 파일, 라이럴러리 등 삭제 (모든 종류의 삭제 커밋) |  remove code  |
|    [FIX]    |                       버그 수정, 오류 해결                       |      fix      |
|   [MOVE]    |             파일이나 폴더, 코드의 이동 및 이름 변경              |     move      |
|   [DOCS]    |        README, WIKI 등 모든 종류의 문서 수정 및 업데이트         | documentation |
| [REFACTOR]  |                     코드 전면 수정이 있을 때                     |   refactor    |
| 🚑️[HOTFIX] |                    급한 버드 수정 (issue, QA)                    |    hotfix     |
|  🔀[MERGE]  |              원격, 로컬 저장에에서 Merge할 때 사용               |     merge     |
| 🚀[DEPLOY]  |                       배포 관련 모든 커밋                        |    deploy     |
|  👷[CI/CD]  |               CI/CD 파이프라인 빌드 관련 모든 커밋               |   ci build    |

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
