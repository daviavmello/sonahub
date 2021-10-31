import axios from "axios";
import React, { useEffect, useState } from "react";
import { ArrowUpRight, X } from "react-feather";
import styled from "styled-components";
import { useSearch } from "../../contexts/searchContext";
import { colors } from "../../style/colors";

export const Commits: React.FC = () => {
  const { userRepo, setUserRepo } = useSearch();
  const { owner, repo } = userRepo;

  const [commits, setCommits] = useState<Array<any>>([]);

  useEffect(() => {
    const getCommits = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_URL}/repos/${owner}/${repo}/commits`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
          },
        }
      );

      try {
        if (res.status === 200) {
          setCommits(res.data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    getCommits();
  }, [owner, repo]);

  const getdate = (commitDate: string) => {
    const date = new Date(commitDate);
    return date.toLocaleDateString("en-US");
  };

  return (
    <CommitsWrapper>
      <CommitsBar>
        <CommitsText>Browse commits</CommitsText>
        <XIcon onClick={() => setUserRepo({ ...userRepo, openModal: false })} />
      </CommitsBar>
      {commits &&
        commits.map((v, i) => {
          return (
            <CommitsRowWrapper key={i}>
              <CommitsBar>
                <CommitAuthor
                  onClick={() => window.open(`${v.author.html_url}`, "_blank")}
                >
                  {v.commit.author.name}
                </CommitAuthor>
                <CommitDate>{getdate(v.commit.author.date)}</CommitDate>
              </CommitsBar>
              <CommitsRow>
                <Message>{v.commit.message}</Message>
              </CommitsRow>
              <CommitsRow>
                <CommitButton
                  onClick={() => window.open(`${v.html_url}`, "_blank")}
                >
                  see code&nbsp;
                  <ArrowUpRightIcon />
                </CommitButton>
              </CommitsRow>
            </CommitsRowWrapper>
          );
        })}
    </CommitsWrapper>
  );
};

const CommitsWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: inherit;
  height: inherit;
  background: ${colors.primary};
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const CommitsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 0.5rem;
`;

const CommitsText = styled.h3`
  font-family: "Consolas", "Courier", monospace;
  color: ${colors.tertiary};
`;

const XIcon = styled(X)`
  cursor: pointer;
  color: ${colors.tertiary};
`;

const CommitsRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommitsRowWrapper = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${colors.divider};
  :last-child {
    border-bottom: none;
  }
`;

const CommitAuthor = styled.p`
  color: ${colors.tertiary};
  font-family: "Consolas", "Courier", monospace;
  cursor: pointer;

  &:hover {
    color: ${colors.secondary};
  }
`;

const Message = styled.p`
  color: ${colors.medium};
  margin-bottom: 0.75rem;
`;

const CommitDate = styled.p`
  color: ${colors.medium};
  font-family: "Consolas", "Courier", monospace;
  font-size: 0.8rem;
`;

const CommitButton = styled.button`
  display: flex;
  align-items: center;
`;

const ArrowUpRightIcon = styled(ArrowUpRight)`
  width: 1rem;
`;
