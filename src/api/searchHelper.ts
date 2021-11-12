import axios, { CancelTokenSource } from "axios";

export const getUsers = async (search: string, request: CancelTokenSource) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/search/repositories?q=${search}`,
      {
        cancelToken: request.token,
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
        },
      }
    );
    return res.data;
  } catch (error: any) {
    return error.response;
  }
};

export const getCommits = async (owner: string, repo: string) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/repos/${owner}/${repo}/commits`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
        },
      }
    );
    return res.data;
  } catch (error: any) {
    return error.response;
  }
};
