import axios from 'axios';
import schemas from '../schemas/schemas';
import { gqlEndpoint } from '../config/config.json';

function getPinnedRepos(): Promise<Repo[]> {
  return new Promise((resolve, reject) => {
    axios.post(gqlEndpoint, {
      query: schemas.getPinnedRepos,
    }, {
      headers: {
        Authorization: `bearer ${process.env.GH_TOKEN}`,
      },
    }).then((res) => {
      resolve(res.data.data.user.pinnedItems.edges.map(({ node }: { node: Repo }) => node));
    }).catch((e) => reject(e));
  });
}

interface Repo {
  name: string;
  description: string;
  forks: Countable;
  stargazers: Countable;
  primaryLanguage: PrimaryLanguage;
}

interface Countable {
  totalCount: number;
}

interface PrimaryLanguage {
  name: string;
  color: string;
}

export default getPinnedRepos;
