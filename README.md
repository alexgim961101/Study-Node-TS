# Study-Node-TS
- nodeJS 및 TS 공부를 위한 프로젝트
- 간단한 게시판을 만들면서 진행할 예정

## Settings
### NVM 설치
```shell
// 특정 노드 버전 설치 방법
// 1. nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

// 2. 터미널 재시작 or 초기화
// bash쉘에 적용된 내용을 현재 쉘 세션에 바로 적용하기 위해 사용
source ~/.bashrc

// 3. 설치 가능한 노드 버전 리스트 확인
nvm list-remote

// 4. 노드 설치
nvm install 14.16.1

// 5. 설치 확인
node -v

// 6. 설치된 노드 버전 확인
nvm ls
```
### package.json 파일 샐성
```bash
yarn init -y
```

### Typescript 설치
```shell
// 전역 -> 어디서든 ts -> js 컴파일 가능
yarn add typescript@4.3 -g

// 지역
yarn add typescript@4.3
```

### tsconfig.json 생성 및 기본 설정
#### tsconfig.json 생성
```zsh
// ts가 전역으로 설치된 경우
tsc --init

// ts가 지역일 경우
npx tsc --init
```
#### 기본 설정
```json
{
    "compilerOptions": {
        "rootDir": "./src",
        "outDir": "./build/js",
        "target": "ES2015",
        "noEmitOnError": true,
        "module": "ESNext",
        "moduleResolution": "Node",
        "esModuleInterop": true,
        "lib": ["ESNext", "DOM"],
        "strict": true,
        "strictNullChecks": true
    },
    "include": [
        "./src/**/*.ts"
    ]
}
```
