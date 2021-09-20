# Study 02 #Solana 블록체인 스마트 컨트랙트 개발을 위한 Hello World 예제
이 프로젝트는 Solana 블록체인 스마트 컨트랙트 개발을 위한 Hello World 예제입니다.  

## Requirement
OS: Windows, MacOS, Linux  
Docker: Latest version  

## Setting
예제 실행을 위한 사전 설정을 진행합니다.

### Docker  
Build & Run
```shell
cd docker && ./build.sh your-docker-hub-username
./run.sh your-docker-hub-user-name
```

Install & Run
```shell
docker pull devbjune/solana-rust-node:latest
./run.sh devbjune
```

### Node

Install Modules
```shell
./exec.sh
yarn
```

## Run Project
앞선 Docker 설정에서 run.sh을 통해 solana 검증 노드를 실행시켜주세요.  

### Step 1. Ineractive solana docker node
새 터미널에서 작업을 진행해주세요.
```shell
./exec.sh
```

### Step 2. Build your smart contract
C 언어로 작성된 스마트 컨트랙트를 빌드합니다.
```shell
yarn build
```

### Step 3. Deploy your smart contract
your-build-file-name: Solana 블록체인에 배포할 __dirname/dist/program 폴더 내의 so 파일명
```shell
./deploy.sh your-build-file-name.so
```

### Step 4. Start your project
```shell
yarn start
```
---  
### 참조: [solana-labs/example-helloworld](https://github.com/solana-labs/example-helloworld)