## 🐶 모르는 개 산책

![image](https://github.com/Step3-kakao-tech-campus/Team17_FE/assets/56586470/5562146e-bdd2-4bb6-93ae-b8b08475c6de)

<br>

## 목차
- [팀 내 배포 링크](#팀-내-배포-링크)
- [개발 동기 및 목적](#개발-동기-및-목적)
- [서비스 소개](#서비스-소개)
- [팀원 소개](#팀원-소개)
- [개발 기간](#개발-기간)
- [기술 스택](#기술-스택)
- [개발-문서](#개발-문서)
- [주요-기능](#주요-기능)
- [개발-주안점](#개발-주안점)


## 팀 내 배포 링크

https://kffd21a2cda73a.user-app.krampoline.com/

<br>

## 개발 동기 및 목적

강아지에게 산책은 필수적이며, 항상 지속적으로 관심을 가져야 하는 활동입니다.

1인가구의 수가 증가하고 반려가구의 수가 증가함에 따라, 반려자 입장에서 반려견에게 지속적인 관심이 부족하게 될 수도, 또한 모든 상황을 반려견에게 맞춰줄 수 없는 문제가 발생할 수 있습니다.

저희 모르는개산책 팀은 반려동물을 키우고 싶지만 여건이 따라주지 않은 사람에겐 경험의 기회를, 내가 원하는 시간대에 비교적 저렴하게, 믿을 수 있게 나의 반려동물을 산책 시켜줄 수 있도록 도움을 주기 위해 이 서비스를 기획하였습니다.

<br>

## 서비스 소개

> 내 가족을 챙기는 하나의 방법, “모르는개 산책”(반려견 산책 매칭) 플랫폼

1. 내가 원하는 설정에 맞춰 산책 공고를 볼 수 있어요! **Home**
   - 수많은 공고... 내가 산책하고 싶은 강아지는 찾기 어려워... 🙄
   - 그런 당신을 위해 준비했습니다!
   - 필터와 검색을 통해, 내가 원하는 강아지나 찾고싶은 제목을 찾아봐요!
2. 프로필, 강아지 등록 및 수정 기능

- 본인의 프로필과, 강아지의 프로필을 등록하고 수정할 수 있어요!
- 내가 키우고있는 강아지의 사진을 보여주며 매력을 어필 할 수 있겠죠??

3. 산책 현황 맵을 통해 나의 반려동물 산책 현황 확인하기

<br>

## 팀원 소개 🫡

| <img src="https://github.com/H-sooyeon.png" width="100"> | <img src="https://github.com/YANGSEOKWOO.png" width="100"> | <img src="https://github.com/chaeni1105.png" width="100"> |
| :------------------------------------------------------: | :--------------------------------------------------------: | :-------------------------------------------------------: |
|   [황수연(FE 테크리더)](https://github.com/H-sooyeon)    |     [양석우(기획리더)](https://github.com/YANGSEOKWOO)     |       [이채은(팀장)](https://github.com/chaeni1105)       |
|      메인, 리뷰, 결제, 로그인, 회원가입, 산책 현황       |                       프로필, 공고글                       |                     채팅, 매칭, 지원                      |

<br>

## 개발 기간 - 23.09 ~ 11.11

<br>

## 기술 스택

| 패키지 매니저 | 개발 라이브러리 | CSS 프레임워크           | 개발 환경       |
| ------------- | --------------- | ------------------------ | --------------- |
| yarn v1.22.19 | react v18.2.0   | styled-components v6.0.8 | eslint v8.50.0  |
|               |                 |                          | prettier v3.0.3 |
|               |                 |                          | vite v4.4.5     |

## 개발 문서

[API 명세서](https://www.notion.so/ERD-API-d8322a13a7ff471391947d075e2f4d5f?pvs=4)<br>
[와이어프레임](https://www.figma.com/file/8lHlkGPMl0By3g6PlWzcfa/17%EC%A1%B0-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?type=design&node-id=0%3A1&mode=design&t=mGASTgPg37q1Rnuu-1)<br>

<br>

## 주요 기능

> - 매칭
> - 산책 현황
> - 강아지 프로필

<br>

## 개발 주안점

- 프로필 페이지 <br>
  상대방의 프로필을 볼 때와 자신의 프로필을 볼때와 화면 구성에 미세한 차이를 두었습니다.
  프로필을 수정하면 새로고침 없이 바로 화면에 렌더링 되며, 썸네일을 보여주도록 하였습니다.

- 공고글 페이지(상세 공고, 공고글 작성) <br>
  하나의 POST 요청으로 사용자의 UI, UX 개선을 위해 한 페이지에 모달창을 3개 구성했습니다.
  페이지로 넘기기에 애매한 것들, 그렇다고 라이브러리로 한 페이지에 뜨는 것은 UI가 안좋아 어떻게 구성하였는지를 봐주세요.

- 매칭 목록 페이지 <br>
  견주는 하나의 공고글에 지원한 여러 명의 아르바이트생 목록을 조회할 수 있습니다.
  매칭 목록을 통해 아르바이트생의 지원서를 조회하고, 수락 버튼을 누르면 채팅을 시작할 수 있습니다.

- 채팅 페이지 <br>
  견주와 아르바이트생은 서로에게 메시지를 주고 받을 수 있습니다.
  견주가 산책 허락하기 버튼을 누르면 아르바이트생은 반려견 산책을 시작할 수 있게 하였습니다.
  이후, 견주와 아르바이트 생은 지도 보기 버튼이 활성화되며 산책 중인 자신의 위치를 알 수 있습니다.

- 메인 페이지 <br>
  사용자 현위치 기준으로 가까운 순의 공고글 리스트를 보여줍니다.
  geolocation 위치 불러오는 것도 비동기이기 때문에, 여러 번 값을 받아오면 로딩이 오래 걸릴 것 같았습니다.
  사용자의 위치를 메인뿐만 아닌 여러 곳에서 사용하기 때문에 어떻게 저장을 해놓을지 고민을 많이 했습니다.

- 산책 현황 페이지 <br>
  견주와 알바생 입장에서 사용자의 위치를 출력하여 실시간으로 서버에게 위치 post 요청을 보내는 것을 목표로 하였습니다.
  웹 워커를 사용하면 될 것이라 생각했고, 그대로 진행하였습니다.
  하지만 웹 워커에서는 사용자의 보안, 프라이버시 보호를 위해 제공하지 않겠다는 geolocaion 개발자들의 단호한 답변을 보고 정말 슬펐습니다.
  결국, 견주는 플랫폼이 활성화 되어 있는 경우에만 서버로 post 요청을 보내고, 견주는 알바생이 플랫폼을 켜 놓은 상태에서만 실시간 위치를 볼 수 있게 되었습니다.

<br>
<img width="514" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team17_FE/assets/59641097/59549e55-89c9-4771-b9e5-8f86c40b1e38">
<img width="524" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team17_FE/assets/59641097/df3e9c50-ea93-425a-bba3-42a8a86b978f">
<img width="458" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team17_FE/assets/59641097/97349fe1-b567-4c1a-8a6f-1540ff3508c8">
<img width="461" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team17_FE/assets/59641097/a71f4357-3397-4525-8ac1-0324740b975e">

### 페이지별 기능 소개

| 분류               | 기능1                                          | 기능2                                                               | 기능3                                        | 기능4                           |
| ------------------ | ---------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------- | ------------------------------- |
| 메인화면           | ![Uploading image.png…]()
사용자들이 등록한 공고글 리스트 조회           | 사용자 현위치 기반 공고글 필터링                                    | 공고글에 대한 견종, 사이즈, 제목으로 필터링  |
| 프로필화면         | 사용자 프로필 등록                             | 사용자의 반려견 프로필 등록                                         | 사용자가 올린 공고글, 지원글, 받은 리뷰 조회 | 완료되지 않은 리뷰 조회 및 등록 |
| 상세공고 페이지    | 사용자들이 등록한 공고글 조회                  | 반려견 프로필, 산책 위치, 반려견 특이사항, 금액 등 공고글 정보 조회 | 해당 공고 지원                               | 지원자 리스트 조회              |
| 공고글 작성 페이지 | 산책 공고 등록                                 | 산책 위치, 반려견 특이사항, 금액 등 공고글 정보 등록                |
| 지원서 페이지      | 원하는 공고에 대해 지원                        | 자신의 강점 작성 제출                                               |
| 결제 페이지        | 견주가 올린 공고글 정보 기반 포인트 결제       |
| 리뷰 페이지        | 견주와 알바생이 서로에 대해 리뷰 등록          |
| 매칭 페이지        | 사용자가 올린 공고글에 대한 지원자 리스트 조회 | 원하는 지원자와 매칭                                                |
| 채팅 페이지        | 매칭된 사용자와의 채팅방 개설                  | 견주의 산책 허락 버튼 클릭으로 산책 현황 맵 접근                    |
| 산책 현황 페이지   | 산책이 허용된 알바생의 실시간 산책 현황 조회   | 산책 시작, 종료                                                     |

<br>

## 시작 가이드

```
$ git clone https://github.com/Step3-kakao-tech-campus/Team17_FE.git
$ cd Team17_FE
$ yarn install
$ yarn dev
```

=======
