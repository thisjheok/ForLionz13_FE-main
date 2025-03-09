type TextObj = {
  main: string;
  sub: string;
};

export const PROFILE_TEXT: { [key: string]: TextObj } = {
  password: {
    main: "비밀번호 변경",
    sub: "LIONZ에서 사용할 비밀번호를 변경합니다.",
  },
  github: {
    main: "깃허브 프로필 주소",
    sub: "나의 깃허브 프로필 주소를 입력합니다.",
  },
  instagram: {
    main: "인스타그램 아이디",
    sub: "나의 인스타그램 아이디를 입력합니다.",
  },
};
