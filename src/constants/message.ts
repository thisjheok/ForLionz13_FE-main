export const ERROR = Object.freeze({
  EXPIRED: "로그인 정보가 만료되었습니다.",
  NO_AUTH: "유저 정보가 올바르지 않습니다.",
  CODE500: "정보를 불러오지 못했습니다.",

  ROUTE_NO_PARAM: "잘못된 경로 입니다.",

  ASSIGNMENT_UPLOAD: "과제 업로드 에러",
  NOTIFICATION_UPLOAD: "공지사항 업로드 에러",
  COMMENT_UPLOAD: "댓글 작성 에러",

  QNA_UPLOAD: "큐앤에이 업로드 에러",
  QNA_UPLOAD_NO_TITLE: "제목을 입력해주세요.",
  QNA_UPLOAD_NO_TAG: "태그를 하나 이상 선택해주세요.",
  QNA_UPLOAD_NO_CONTENT: "내용을 입력해주세요.",

  FILE_UPLOAD: "파일 업로드에 실패하였습니다.",

  ALL_MEMBER: "모든 멤버 조회 에러",
  ALL_NOTICE: "모든 공지사항 조회 에러",
  ALL_ASSIGNMENT: "모든 과제 조회 에러",
  ALL_QNA: "모든 큐앤에이 조회 에러",
  ALL_COMMENTS: "모든 댓글 조회 에러",

  ID_ASSIGNMENT: "특정 과제 조회 에러",
  ID_NOTIFICATION: "특정 공지사항 조회 에러",
  ID_QNA: "특정 큐앤에이 조회 에러",
  ID_MEMBER: "특정 유저 조회 에러",

  DELETE_QNA: "해당 큐앤에이 삭제에 실패하였습니다.",
  DELETE_USER_IMAGE: "프로필 이미지를 삭제하는데 실패하였습니다.",
  DELETE_COMMENT: "해당 댓글 삭제에 실패하였습니다.",

  NO_LINK_ASSIGNMENT: "링크는 필수 사항입니다.",
  PART_ASSIGNMENT: "해당 파트 과제 조회 에러",
  SUBMITTED_ASSIGNMENT: "제출된 과제 조회 에러",
  CANT_SUBMIT_ASSIGNMENT: "제출에 실패하였습니다.",

  MY_ASSIGNMENT: "내 제출 조회 에러",
  MY_INFO: "내 정보 조회 에러",
  UPDATE_INFO: "내 정보 업데이트에 실패하였습니다.",

  NO_PART: "파트가 존재하지 않습니다.",
  NO_ID: "유저 아이디가 존재하지 않습니다.",
} as const);

export const GUIDE_MESSAGE: { [key: string]: string } = Object.freeze({
  PASSWORD: "비밀번호 변경에 성공하였습니다.",
  GITHUB: "깃헙 주소 변경에 성공하였습니다.",
  INSTAGRAM: "아이디 변경에 성공하였습니다.",
} as const);
