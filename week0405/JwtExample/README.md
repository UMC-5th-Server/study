JWT (JSON Web Token): 수신자와 송신자 간에 정보를 JSON 객체로 안전하게 전송하기 위한 방법을 정의하는 표준
- 디지털 서명되어 있으므로 확인 및 신뢰가 가능

사용
1. Authorization
- 사용자가 로그인하면 이후의 각 요청에서는 JWT가 포함됨
- 사용자가 해당 토큰으로 허용되는 패스, 서비스 등에 액세스 할 수 있음

2. Information Exchange
- 정보를 안전하게 전송할 수 있음

구조
1. Header : 토큰 유형, 서명 알고리즘의 두 부분으로 구성
2. Payload : 클레임을 포함
3. Signature : Header의 인코딩 값과 Data의 인코딩 값을 합친 후 주어진 private key로 해시하여 생성

작동 방법
1. 사용자가 보호된 경로나 리소스에 접근하려고 함
2. Bearer 스키마를 사용하여 Authorization 헤더에서 JWT를 전송
3. 서버의 보호된 경로가 Authorization header에서 유효한 JWT를 확인함
4. 유효한 JWT가 있는 경우 -> 접근 가능

주의할 점 - 토큰에 포함된 모든 정보가 다른 사람에게 노출되기 때문에 비밀 정보를 입력해서는 안됨