import express from 'express';
import { Repo, getPinnedRepos } from '../api/getPinnedRepos';

let repoCache: Repo[] = [];

function storeRepos() {
  getPinnedRepos().then((repos) => {
    repoCache = repos;
  });
}

// cache every 1/2 hour
export function cacheRepos() {
  storeRepos();
  setInterval(storeRepos, 1800000);
}

export function fetchPinnedRepos(router: express.Router) {
  router.get('/repos', (req, res) => {
    res.send({ repos: repoCache });
  });
}
