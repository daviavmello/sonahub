import axios from "axios";

export const getUsers = async (search: string) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}/search/repositories?q=${search}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_KEY}`,
        },
      }
    );
    return res.data;
  } catch {
    return undefined;
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
  } catch {
    return undefined;
  }
};
