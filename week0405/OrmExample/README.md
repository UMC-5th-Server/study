JDBC (Java Database Connectivity)
- 간단한 SQL을 실행하는 데도 중복 코드를 반복적으로 사용
- DB에 따라 일관성 없는 정보를 가진 채로 Checked Exception 처리

=> Persistence Framework 사용

SQL Mapper : SQL을 직접 작성, SQL문과 객체의 필드를 매핑하여 데이터를 객체화
- JdbcTemplate
- MyBatis -> 복잡한 쿼리 작성 쉬움, 관심사 분리로 유지보수성 향상

SQL을 직접 다룰 때 생기는 문제점
- 특정 DB에 종속적으로 사용하기 쉬움
- 코드상으로 SQL과 JDBC API를 분리했다 하더라도 논리적으로 강한 의존성을 가짐
- 관계형 DB와 객체 간의 패러다임 불일치

ORM(Object Relational Mapping) -JPA

장점
- 패러다임 불일치 문제 해결
- 생산성
- 데이터 접근 추상화, 벤더 독립성
- 유지보수