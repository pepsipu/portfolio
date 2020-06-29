import getPinnedRepos from '../api/getPinnedRepos';
import express from 'express';

export default (router: express.Router) => {
    router.get('/repos', (req, res) => {
        getPinnedRepos().then((repos) => {
            res.send({ repos });
            res.end();
        })
    });
}
