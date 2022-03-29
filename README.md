# steem-dashboard

steem 용 대쉬보드, 다양한 기능을 추가 예정

## STEEM RUNNERS

1회 던지는데 10 STEEM

[중요] Re:Run 을 할 경우 이전 숫자는 무시하게 됨. Max 값이 아님에 유의
(이전 : 7, RE:Run : 3 이런 경우, 7이 아닌 3이 되게 됨.)

당일자 - RE:Run

10, 20, 30 40, 50 - 10 STEEM 씩 비용이 증가. ( 최대 5회 )

지나간 날 - RE:Run

20, 40, 80, 160, 320 - 2배 씩 비용이 증가. ( 최대 5회 )
( 이전에 돌린, 당일자 RE:Run 횟수는 무시함 )

단, NFT 보유자(또는 기부자)에게 할인 혜택 증정

COMMON : - 1 STEEM
RARE : - 3 STEEM
EPIC : - 5 STEEM
LEGENDARY : - 10 STEEM

## 실행

> pm2 start

`npm install -g pm2` 가 사전 설치 되어 있어야 됨

pm2 `start` 는 기동 시 현재 폴더의 ecosystem.config.js 를 참조함

## 디버깅

> debug 로그를 확인하고자 하는 경우 아래와 같이 한다.
> debug 사용법 : https://www.npmjs.com/package//debug 참조

- cmd : `set DEBUG=* & node ./bin/www`
- git-bash : `DEBUG=* node ./bin/www`

> 개인적으로는 그냥 nodemon 으로 해서 console.log 를 보는 편이 좋다 생각함.
> `npm install -g nodemon` 사전 설치가 필요

`nodemon ./bin/www`

## 참조링크

[docs:coreui](https://coreui.io/docs/getting-started/introduction/)
[i18next-http-middleware](https://npm.io/package/i18next-http-middleware)
[i18n:참조](https://lokalise.com/blog/node-js-i18n-express-js-localization/)
[svgsprit](https://svgsprit.es/)
[svg-icon](https://junojunho.com/front-end/svg-icon)
