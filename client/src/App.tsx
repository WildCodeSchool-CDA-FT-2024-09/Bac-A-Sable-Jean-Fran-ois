import { useLoaderData } from "react-router-dom";
import "./App.css";
import { RepoLoader } from "./types/repos.types";
import RepoCard from "./RepoCard";

function App() {
  const repos = useLoaderData() as RepoLoader[];

  return (
    <div>
      {repos &&
        repos.map((e) => (
          <RepoCard
            key={e.id}
            id={e.id}
            langs={e.langs}
            status={e.status}
            name={e.name}
            url={e.url}
          />
        ))}
    </div>
  );
}

export default App;
