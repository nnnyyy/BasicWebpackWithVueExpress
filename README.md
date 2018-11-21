# BasicWebpackWithVueExpress
웹팩 + Vue + Express 의 가장 단순하고 기본적인 개발 구성.

### 포함 된 로더 
> ##### style-loader
> ##### css-loader
> ##### vue-loader
> ##### babel-loader

### 설치
> npm install

### 실행
##### babel 로 server/src 에 있는 ES6 문법 파일들을 server/dist 로 convert 함.
> babel server/src --out-dir server/dist

##### express server 실행
> node server/dist/app.js

#### 1. 개발 모드
##### webpack-dev-server 실행
> npm run dev

#### 2. 배포 모드
##### 빌드
> npm run build
