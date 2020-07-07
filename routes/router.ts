import express from 'express';
import fetchPinnedRepos from './fetchPinnedRepos';
import status from './status';

const router = express.Router();

const routerRegistrars = [fetchPinnedRepos, status];
routerRegistrars.forEach((registrar) => registrar(router));

export default router;
