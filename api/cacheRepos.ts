import { Repo, getPinnedRepos } from './getPinnedRepos';

let repoCache: Repo[] = [];

function cacheRepos() {
  getPinnedRepos().then((repos) => {
    repoCache = [...repos];
  });
}

export { repoCache, cacheRepos };
