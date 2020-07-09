import express from 'express';
import { Repo, getPinnedRepos } from '../api/getPinnedRepos';

let repoCache: Repo[] = [];

// cache every 1/2 hour
export function cacheRepos() {
  setInterval(() => {
    getPinnedRepos().then((repos) => {
      repoCache = repos;
    });
  }, 1800000);
}

export function fetchPinnedRepos(router: express.Router) {
  router.get('/repos', (req, res) => {
    res.send({ repos: repoCache });
  });
}
