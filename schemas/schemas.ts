import fs from 'fs';
import { ghUsername } from '../config/config.json';

export default {
  getPinnedRepos: fs.readFileSync(`${__dirname}/../../schemas/getPinnedRepos.graphql`, {
    encoding: 'utf8',
    flag: 'r',
  }).replace('{{ username }}', ghUsername),
};
