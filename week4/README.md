# 세션 vs 쿠키 vs 토큰
쿠키 : 브라우저에 저장, 유료기간 있음

세션 : 세션DB (서버 저장, 세션ID로 검색)
    서버가 로그인된 모든 사용자 정보 보유

토큰 : string, request오면 토큰이 유효한지 검증 
    클라이언트 저장

JWT(JSON Web Token) : 유저 정보를 암호화, 생성한 토큰
    DB가 따로 필요X, 로그인된 사용자 정보X
    - Authorization(권한부여)
    - Information Exchange(정보교환, 무결성 확인) 

Refresh Token : Access Token이 만료됐을 때 새로 발급해주는 열쇠, 긴 유효시간.
    - 서버에 저장 (서버에서 refresh token을 삭제함으로써 강제 로그아웃 가능)

=> access token은 보안적으로 취약하니 2시간 정도로 짧게 가져가고, refresh token은 처리 비용이 많이 들기 때문에 2주 정도로 길게 가져가는 방식을 주로 사용


