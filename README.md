> ### 시작하기에 앞서

![Youtube Profile](https://user-images.githubusercontent.com/46777310/161433606-651b59fc-f22c-403c-8cbb-fd98fdfefcd1.png)

해당 강의는 [dapp campus님의 [Lottery Dapp 개발하기]](https://www.youtube.com/channel/UCvF95zGgUlY2G6Lkb1GO-fw) 강의를 보고 제작되었음을 미리 밝히며 감사드립니다.

> ### 기초 설정

`npm` 설치

```
npm i -g truffle ganache-cli
```

폴더를 만들고 truffle init을 입력 시 

![folder item](https://user-images.githubusercontent.com/46777310/161433723-e7674715-3e6f-43c7-8662-7f7d57a51bcd.png)

위와 같은 구조가 생성된다. (build 폴더와 README.md 는 X)

> ### 기초 실행

contracts 파일의 sol 파일을 실행해주기 위해 migrations 폴더에 deploy 할 파일을 생성해준다.

```
truffle compile 
```

실행 시 build 폴더가 생성되며 sol => json 형식으로 변환이 이루어짐

> ### 배포 준비

![migrations](https://user-images.githubusercontent.com/46777310/161433820-2a051b9f-bef0-4c36-91ac-eae82da2b67a.png)

위으 빨간 줄과 같이 contracts 에 sol파일명과 같이 파일명을 명시하며 주황 라인이 그어진 변수는 truffle-config.js에 명시되어 있는 대로 배포를 도와줄 매개변수이다.

truffle-config.js 의

![truffle-config.js](https://user-images.githubusercontent.com/46777310/161434079-71c7a0a5-7edd-41ca-bef5-c02bc42c16a4.png)

networks탭에 localhost의 주소인 127.0.0.1을 주고 위와같은 설정이 끝난 후

```
ganache-cli -d -m (hash값을 줄 임의의 이름)
```

위와같이 실행하면

![ganache-cli](https://user-images.githubusercontent.com/46777310/161433995-186ecff8-9832-4871-8e25-6fe0c0052d50.png)

위와 같은 key값과 여러 정보를 담은 로그를 출력해주며 위에 선언해준 이름과 관련된 정보가 생성됨을 알 수 있음

즉 가상의 서버가 실행됨

이제 모든 준비가 끝났으며

```
truffle-migrate
```

![truffle-migrate](https://user-images.githubusercontent.com/46777310/161434148-5bbd1aaa-37ba-41bc-8744-87872703cde8.png)


실행시 위와같은 네트워크의 정보와 Migration결과를 담은 로그를 출력해줌

