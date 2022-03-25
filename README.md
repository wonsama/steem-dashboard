# steem-dashboard

steem 용 대쉬보드, 다양한 기능을 추가 예정

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
