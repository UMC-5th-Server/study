ORM vs SQL Mapper vs JDBC

- Persistence : 데이터의 영속성, 데이터 생성한 프로그램이 종료되어도 사라지지X

# JDBC
반복적 작업

# SQL Mapper
SQL문과 객체의 필드를 매핑 -> 데이터 객체화
    ex> MyBatis
        동적 쿼리 제공

=> 쿼리문을 직접 작성하면, 특정 DB에 종속적으로 사용하기 쉬운 문제

# ORM
객체와 관계형 DB 매핑
SQL Query가 아닌 직관적인 코드(메서드)로 데이터 조작
    ex> JPA
- RDB는 객체의 상속 개념이 없음 
=> 객체의 참조를 외래키로 변환
복잡한 쿼리 => JPQL, SQL자체 쿼리, SQL Mapper 사용!


