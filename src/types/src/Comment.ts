export interface IComment {
  commentId: number;
  name: string;
  memberImageUrl: string;
  part: string;
  createdAt: string;
  content: string;
  memberId: number;
  update: () => void;
  isDark: boolean;
}

export interface IChild {
  childCommentId: number;
  name: string;
  memberImageUrl: string;
  part: string;
  createdAt: string;
  content: string;
  memberId: number;
  update: () => void;
}
