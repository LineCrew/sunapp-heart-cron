### 1. Introudction 

Author : Jude Park

Email: park.jude.96@gmail.com , judepark@kookmin.ac.kr 

본 NodeJS 코드는 일정한 주기를 가지고 하트를 갱신하기 위한 Cron Job 입니다.

### 2. Getting Started

우선 `dotenv` 를 프로젝트의 루트 디렉터리에 생성해줍니다.

```shell
DATABASE_NAME=database_name
USERNAME=username
PASSWORD=password
HOST=host
DIALECT=mysql
CRON_QUERY=query
```

본 Cron Job 은 모든 사용자가 가지고 있는 하트의 개수를 5개로 갱신해주는 것이기 때문에 `update users set heart=5;` 를 `CRON_QUERY` 에 작성하면 됩니다.

다른 쿼리문을 넣어도 그 쿼리문이 문법적으로 틀리지 않다면 동작하도록 되어있습니다.

```shell
npm install
node app.js
```

을 하면 데이터베이스와의 연결에 대한 로그, 그리고 Cron Job 이 동작하고 있는지 콘솔에 출력됩니다.

혹은 pm2 를 전역 설치를 하고 `pm2 start app.js` 를 해도 무방합니다.