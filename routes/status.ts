import express from 'express';

export default (router: express.Router) => {
  router.get('/', (req, res) => {
    res.send({ ok: true });
    res.end();
  });
};
