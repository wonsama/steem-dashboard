## STEEM RUNNERS

## 구성

> 우선 FREERUN 부터 진행 후 서비스 안정성 확인 후 RUNNERS 개장하기
> 1% 로 보팅 수행 (실제 보팅이 잘 되는지 여부를 확인하기 위함)

## 참가비

> 테스트 시에는 0.001 STEEM

- RUN : 10 STEEM (당일)
- RE:RUN : 10, 20, 30, 40, 50 ()

### 보상

> 나머지는

- 1등 : 20%, 최소 100 STEEM 보장
- 2등 : 10%, 최소 70 STEEM 보장
- 3등 : 50 STEEM
- 스파업 : 10%
- 유지보수비 : 3%

### FO

[로그인]

[잔액 표현]

[버튼] RUN / RE:RUN / EX-RE:RUN (전일자)

### BO

[데이터] /api/runners/round

> 순위 : desc : run, last-block

```json
{
  "round": 1,
  "day": 1,
  "max-boost": 10,
  "rewards": {
    "pool": 450,
    "1st": {
      "runner": "wonsama1",
      "prize": "100"
    },
    "2nd": {
      "runner": "wonsama2",
      "prize": "70"
    },
    "3rd": {
      "runner": "wonsama3",
      "prize": "50",
      }
    }
  },
  "top10": []   // 아래 사용자 정보를 순서대로 넣어준다.
}
```

[데이터] /api/runners/runner?user=wonsama&round=1

```json
{
  "user": "wonsama5",
  "round": 1,
  "rank": 5,
  "boost": 0, // RE:RUN 한 수치 합계
  "days": [
    {
      "day": 1,
      "run": 3,
      "runs": [
        {
          "block": 123,
          "txid": "aaaa",
          "run": 5,
          "time": "yyyy-mm-dd HH:MM:ss"
        },
        {
          "block": 124,
          "txid": "bbbb",
          "run": 3,
          "time": "yyyy-mm-dd HH:MM:ss"
        }
      ]
    },
    {
      "day": 2,
      "run": 0,
      "runs": []
    }
  ]
}
```

> 시간 = UTC +9 TIMEZONE으로 연산처리 (한국)

- PLAY TIME
  - 00:15 ~ 24:00
- REAL TIME
  - 주사위 합이 50 넘은 경우 라운드 종료 처리
- CHECK TIME
  - 00:00 ~ 00:15
  - 정산처리 및 다음 ROUND 진행

---

## 참가

### 1회 던지는데 10 STEEM

[중요] Re:Run 을 할 경우 이전 숫자는 무시하게 됨. Max 값이 아님에 유의
(이전 : 7, RE:Run : 3 이런 경우, 7이 아닌 3이 되게 됨.)

### 당일자 - RE:Run

10, 20, 30 40, 50 - 10 STEEM 씩 비용이 증가. ( 최대 5회 )

### 지나간 날 - RE:Run

20, 40, 80, 160, 320 - 2배 씩 비용이 증가. ( 최대 5회 )
( 이전에 돌린, 당일자 RE:Run 횟수는 무시함 )

### 기타 혜택

단, NFT 보유자(또는 기부자)에게 `RE:Run` 할인 혜택 증정

COMMON : - 1 STEEM
RARE : - 3 STEEM
EPIC : - 5 STEEM
LEGENDARY : - 10 STEEM
