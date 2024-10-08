import { NavLink } from "react-router-dom";
import { RepoLoader } from "./types/repos.types";

function RepoCard({ id, status, name, url, langs }: RepoLoader) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>ID:{id}</h2>
      <h3>Repo privé : {status.id === 1 ? "Oui" : "Non"}</h3>
      <NavLink to={url}>Lien</NavLink>
      {langs.map((e) => (
        <p>{e.label}</p>
      ))}
    </div>
  );
}

export default RepoCard;
