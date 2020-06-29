import express from 'express';
import fetchPinnedRepos from './fetchPinnedRepos';

const router = express.Router();

const routerRegistrars = [fetchPinnedRepos];
routerRegistrars.forEach((registrar) => registrar(router));

export default router;
