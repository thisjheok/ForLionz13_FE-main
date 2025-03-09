export interface ICard {
  bgcolor: string;
  title: string;
  content: string;
  part: string;
  expireAt: string;
  index: number;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
