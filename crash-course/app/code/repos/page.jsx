import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

export const metadata = {
  title: "Code",
};

async function getRepos() {
  const response = await fetch(
    "https://api.github.com/users/mogakaowen/repos",
    {
      next: {
        revalidate: 60, // revalidate every 60 seconds to get fresh data
      },
    }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate slow network with 1 second delay

  const data = await response.json();
  return data;
}

const ReposPage = async () => {
  const repos = await getRepos();

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.language}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
