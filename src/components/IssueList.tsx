import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { issueListState } from "../state/atoms/issueListState";
import { useNavigate } from "react-router-dom";

interface IssueType {
  id: number;
  title: string;
  number: number;
  created_at: string;
  comments: number;
}

const IssueList = () => {
  const [issues, setIssues] = useRecoilState(issueListState);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchIssues = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/repos/angular/angular-cli/issues?page=${page}&per_page=10`
      );
      setIssues((prevIssues) => [...prevIssues, ...response.data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetIssues = () => {
    setIssues([]);
    setPage(1);
  };

  const goToIssueDetail = (id: number) => {
    navigate(`/issue/${id}`);
  };

  return (
    <div className=" bg-blue-400">
      {issues.map((issue: IssueType, index) => (
        <React.Fragment key={issue.id}>
          <div
            onClick={() => goToIssueDetail(issue.number)}
            style={{ cursor: "pointer" }}
          >
            <h3 className=" text-sm bg-blue-50">{issue.title}</h3>
            <p>Issue number: {issue.number}</p>
            <p>Created at: {issue.created_at}</p>
            <p>Comments: {issue.comments}</p>
          </div>
          {((index + 1) % 10 === 0 || index === issues.length - 1) && (
            <a
              href="https://thingsflow.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7"
                alt="광고"
              />
            </a>
          )}
        </React.Fragment>
      ))}
      {loading && <p>issue 10개 로딩 시작</p>}
      <button onClick={fetchIssues}>load</button>
      <button onClick={resetIssues}>초기화</button>
    </div>
  );
};

export default IssueList;
