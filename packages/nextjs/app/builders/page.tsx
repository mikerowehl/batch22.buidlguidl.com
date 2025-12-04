import fs from "fs";
import { gql, request } from "graphql-request";
import path from "path";
import BuildersList from "~~/components/BuildersList";

const query = gql`
  {
    checkedIns {
      builder
    }
  }
`;
const url = "https://api.studio.thegraph.com/query/1717360/batch-22-buidlguidl/version/latest";

const BuildersPage = async () => {
  // Fetch data on the server
  const data = await request(url, query, {});
  const checkedIns = (data?.checkedIns || []) as Array<{ builder: string }>;

  // Remove duplicates
  const uniqueBuilders = Array.from(
    new Map(checkedIns.map((item, index) => [item.builder, { ...item, index }])).values(),
  ) as Array<{ builder: string; index: number }>;

  // Read folders from filesystem
  const buildersDir = path.join(process.cwd(), "app/builders");
  const folders = fs
    .readdirSync(buildersDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  return (
    <div className="flex items-center flex-col grow pt-10">
      <h1 className="text-2xl font-bold mb-4">Builders List</h1>
      <BuildersList builders={uniqueBuilders} buildersWithPages={folders} />
    </div>
  );
};

export default BuildersPage;
