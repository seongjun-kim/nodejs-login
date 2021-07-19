# My First Node.js Login Server with MySQL(AWS RDS)

  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/MySQL-E6B91E?style=flat-square&logo=MySql&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/aws-333664?style=flat-square&logo=amazon-aws&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/JavaScript-ffb13b?style=flat-square&logo=javascript&logoColor=white"/></a>
  <img src="https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css3&logoColor=white"/></a>
  
- [node.js 백엔드 맛보기 강의](https://www.youtube.com/playlist?list=PLSK4WsJ8JS4cQ-niGNum4bkK_THHOizTs)
<br>

# 주의

본 프로젝트의 정상적인 실행을 위해서는
내부에서 활용되는 **환경변수(.env)** 설정이 필요합니다.

<br><br>

# 설치

빠른 개발 환경을 위해 변경사항에 대한 자동 반영(Hot-Reloading)을 위해
최초 실행 이전에 **nodemon** 설치가 필요합니다.

```sh
sudo npm i nodemon -g
```

최초 실행 이전에 프로젝트 **패키지 설치**를 수행합니다.

```sh
cd app
yarn install
```

<br><br>

# 실행

설치과정 이후 아래 명령어를 통해 서버 가동이 가능합니다.


```sh
yarn start
```

<br><br>


# Swagger

서버 가동 이후, API 명세는 `{server_url}/docs`를 통해 확인할 수 있습니다.

<br><br>


# Log

Morgan과 rotating-file-stream을 활용해 **3일 동안**의 로그를 기록하도록 설정되어 있습니다.<br>
**저장경로**: `{PROJECT_DIR}/app/log/access.log`

<br><br>
