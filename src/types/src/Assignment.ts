export interface IAssignment {
  id: number;
  category: string;
  title: string;
  content: string;
  part: string;
  createdAt: string;
  expireAt: string;
  tags: string[];
  submissions: ISubmitted[];
  submissionCount: number;
  githubLink: string;
}

export interface ISubmitted {
  assignmentId: number;
  assignmentLink: string;
  createdAt: string;
  description: string;
  id: number;
  memberId: number;
  memberName: string;
}

export interface IAssignmentResult extends Array<IAssignment> {
  assignments: IAssignment[];
}
