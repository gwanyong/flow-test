import { atom } from "recoil";

interface IssueType {
  id: number;
  title: string;
  number: number;
  created_at: string;
  comments: number;
}

export const issueListState = atom<IssueType[]>({
  key: "issueListState",
  default: [],
});
