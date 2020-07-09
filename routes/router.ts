import express from 'express';
import { fetchPinnedRepos, cacheRepos } from './fetchPinnedRepos';
import status from './status';

const router = express.Router();

cacheRepos();
const routerRegistrars = [fetchPinnedRepos, status];
routerRegistrars.forEach((registrar) => registrar(router));

export default router;
