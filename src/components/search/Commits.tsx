import React, { useEffect, useState } from "react";
import { ArrowUpRight, X } from "react-feather";
import styled from "styled-components";
import { getCommits } from "../../api/searchHelper";
import { useSearch } from "../../contexts/searchContext";
import { getdate } from "../../helpers/numberHelper";

export const Commits: React.FC = () => {
  const { userRepo, setUserRepo, setBadRequest, setUsers } = useSearch();
  const { owner, repo } = userRepo;

  const [commits, setCommits] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchCommits = async () => {
      const data = await getCommits(owner, repo);
      if (data.status >= 400) {
        setBadRequest(true);
        setTimeout(() => {
          setBadRequest(false);
          fetchCommits();
        }, 61000);
      }
      setCommits(data);
    };
    fetchCommits();
  }, [owner, repo, setBadRequest, setUsers]);

  return (
    <CommitsWrapper>
      <CommitsBar>
        <CommitsText>Browse commits</CommitsText>
        <XIcon onClick={() => setUserRepo({ ...userRepo, openModal: false })} />
      </CommitsBar>
      <CommitTitle
        onClick={() =>
          window.open(`http://github.com/${owner}/${repo}`, "_blank")
        }
      >
        <span>/</span>
        {repo}
      </CommitTitle>
      {commits &&
        commits.map((v, i) => (
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
        ))}
    </CommitsWrapper>
  );
};

const CommitsWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: calc(100% - 1rem);
  height: inherit;
  background: ${({ theme }) => theme.primary};
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  animation: fadein 0.7s;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 767px) {
    left: 0;
    width: calc(100vw - 2rem);
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
  color: ${({ theme }) => theme.tertiary};
`;

const CommitTitle = styled.h3`
  color: ${({ theme }) => theme.tertiary};
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  span {
    color: ${({ theme }) => theme.medium};
  }
`;

const XIcon = styled(X)`
  cursor: pointer;
  color: ${({ theme }) => theme.tertiary};
`;

const CommitsRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommitsRowWrapper = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.divider};
  :last-child {
    border-bottom: none;
  }
`;

const CommitAuthor = styled.p`
  color: ${({ theme }) => theme.tertiary};
  font-family: "Consolas", "Courier", monospace;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Message = styled.p`
  color: ${({ theme }) => theme.medium};
  margin-bottom: 0.75rem;
`;

const CommitDate = styled.p`
  color: ${({ theme }) => theme.medium};
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
