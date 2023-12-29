import Link from "next/link";

async function getRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/mogakaowen/${name}/contents`,
    {
      next: {
        revalidate: 60, // revalidate every 60 seconds to get fresh data
      },
    }
  );

  const data = await response.json();
  return data;
}

const RepoDirs = async ({ name }) => {
  const contents = await getRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
