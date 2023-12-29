import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function getRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/mogakaowen/${name}`
  );

  const data = await response.json();
  return data;
}

const Repo = async ({ name }) => {
  const repo = await getRepo(name);
  console.log(repo);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.language}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
