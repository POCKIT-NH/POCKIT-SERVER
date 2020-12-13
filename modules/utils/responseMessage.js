module.exports = {
  //DB
  DB_ERROR: '디비 내부 오류',
  DB_REFERENCE_ERROR: '잘못된 외래키입니다.',
  DB_NOT_MATCHED_ERROR: '해당 조건에 일치하는 데이터가 없습니다.',
  DB_DUPLICATE_ENTRY_ERROR: '중복되는 값이 이미 존재합니다',
  DB_SUCCESS: 'DB 조회 성공',

  OUT_OF_VALUE: '파라미터 값이 잘못 되었습니다.',
  NULL_VALUE: '필요한 값이 없습니다.',
  INTERNAL_SERVER_ERROR: '서버 내부 오류',
  SUCCESS: '성공',

  //token
  ACCESS_NULL: 'access 토큰 값이 없습니다.',
  REFRESH_NULL: 'refresh 토큰 값이 없습니다.',
  INVALID_TOKEN: '유효하지 않은 토큰입니다.',
  EXPIRED_TOKEN: '만료된 토큰입니다.',
  CLEAR_TOKEN: '로그아웃완료',

  // sign
  NICKNAME_DUPLICATE_FAIL: '닉네임 중복입니다.',
  NICKNAME_DUPLICATE_OK: '사용할 수 있는 닉네임입니다.',
  SIGNUP_DUPLICATE_FAIL: '아이디나 닉네임 중복',
  SIGNUP_SUCCESS: '회원가입 성공',
  ID_SEARCH_FAIL: '존재하지 않는 이메일입니다.',
  PWD_SEARCH_FAIL: '비밀번호 오류입니다.',
  PWD_NULL: '비밀번호를 입력해주세요.',
  LOGIN_SUCCESS: '로그인 성공',
  LOGIN_FAIL: '아이디나 비밀번호가 틀렸습니다.',
  LOGOUT_SUCCESS: '로그아웃 성공',
  LOGOUT_FAIL: '로그아웃 실패',
  LOGIN_AGAIN: '다시 로그인하세요',
  ARTIST_SUCCESS: '아티스트 정보 가져오기 성공',
  ARTIST_FAIL: '아티스트 정보 가져오기 실패',

  //auth
  AUTH_TRUE: '권한이 있습니다.',
  EMAIL_SEND_SUCCESS: '이메일 전송완료',
  EMAIL_SEND_FAIL: '이메일 전송 실패',
  EMAIL_DUPLICATED_FAIL: '이미 가입되어있는 이메일입니다.',
  EMAIL_AUTH_SUCCESS: '이메일 인증완료',
  EMAIL_AUTH_FAIL: '이메일 인증 실패',

  // register
  TICKET_REGISTER_OK: '티켓 등록 성공',
  TICKET_FULL: '등록할 수 있는 티켓 개수를 초과하였습니다.',
  TICKET_REGISTER_FAIL: '티켓 등록 실패',
  SHOW_INFO_SUCCESS: '공연 정보 불러오기 성공',
  SHOW_INFO_FAIL: '공연 정보 불러오기 실패~!',

  // register
  DB_REGISTER_OK: '등록 성공',
};
