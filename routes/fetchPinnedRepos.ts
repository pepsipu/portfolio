import express from 'express';
import getPinnedRepos from '../api/getPinnedRepos';

export default (router: express.Router) => {
  router.get('/repos', (req, res) => {
    getPinnedRepos().then((repos) => {
      res.send({ repos });
      res.end();
    });
  });
};
