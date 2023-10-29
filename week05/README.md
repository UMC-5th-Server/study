# 5주차 스터디 : ORM

### 1. Persistence

- 데이터를 생성한 프로그램이 종료되더라도 사라지지 않는 데이터의 특성
- 영속성이라고 함

- Persistence Layer : Domain 객체에 영속성을 부여
- Persistence Layer 구현 방법
  - JDBC
  - Persistence Framework

<br>

**JDBC**

- 자바 애플리케이션 DBMS의 종류에 상관 없이 하나의 JDBC API를 이용해 DB 작업을 처리
- 각각의 DBMS는 이를 구현한 JDBC 드라이버를 제공
- Driver 로드 -> Connection 객체 생성 -> State 생성 후 쿼리 작성 -> ResultSet 반환

- 간단한 SQL 실행 시 중복된 코드 반복적 사용
- DB에 다라 일관성 없는 정보를 가진 채로 SQLException 처리
- Connection을 제대로 반환하지 않으면 시스템 자원이 고갈 버그 발생

<br>

**Persistence Framework**

- JDBC 프로그래밍의 복잡함이나 번거로움 없이 간단한 작업만으로 DB와 연동되는 시스템을 빠르게 개발
- SQL을 직접 작성 + SQL문과 객체의 필드를 매핑하여 데이터를 객체화 -> 이때 SQL Mapper 사용
- ex) JDBC Template, MyBatis

- JDBC Template

  - 쿼리 수행 겨로가와 객체의 필드를 매핑 + RowMapper 재활용
  - JDBC에서 반복적으로 해야하는 많은 작업을 대신 해줌

- MyBatis
  - 반복적인 JDBC 프로그래밍을 단순화
  - SQL 쿼리들을 XMl 파일에 작성하여 코드와 SQL을 분리하여 관리

<br>

### 2. ORM

- 패러다임 불일치 문제를 해결하기 위해 등장
- 객체와 관계형 DB를 맵핑 + SQL Query가 아닌 직관적인 코드로 데이터 조작
- DB에 읜존하지 않는 개발 가능
- ex) JPA(Hibernate, EclipseLink, DataNucleus)

- 장점

  - 높은 생산성: 반복적인 CRUD SQL을 개발자가 작성하지 않아도 됨
  - 데이터 접근 추상화, 벤더 독립성: DB 벤더마다 미묘하게 다른 데이터 타입, SQL을 손쉽게 해결
  - 유지보수: 필드 추가 시 관련된 CRUD 쿼리를 직접 수정하지 않고 엔티티만 수정

- 단점
  - 복잡한 쿼리 사용의 어려움 -> JPQL 지원

<br>

### 3. Sequelize

- Promise 기반 Node.js ORM

> 의존성 설치

```
npm install --save sequelize, sequelize-cli
npm install --save path, fs
npx sequelize init  // config/config.json 파일 생성
```

- 조회: findAll()
- 삭제: destroy()
- 추가: create()
