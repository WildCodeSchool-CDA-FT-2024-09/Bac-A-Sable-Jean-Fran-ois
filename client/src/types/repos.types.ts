export interface Repo {
  id: string;
  isPrivate: number;
  name: string;
  url: string;
}

export interface RepoLoader {
  id: string;
  status: { id: number; label: string };
  name: string;
  url: string;
  langs: { id: number; label: string }[];
}

export interface RepoProps {
  repo: {
    id: string;
    isPrivate: number;
    name: string;
    url: string;
  };
}
