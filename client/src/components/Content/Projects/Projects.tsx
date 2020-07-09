import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import axios from 'axios';
import { gateway } from '../../../config.json';

const Projects = () => {
  const [projects, setProjects]: [Repo[], any] = useState([]);
  axios.get(`${gateway}/repos`).then((res) => {
    const { repos }: { repos: Repo[] } = res.data;
    setProjects(repos);
  });
  return (
    <motion.div
      initial={{
        height: '0',
        opacity: 0,
      }}
      animate={{
        height: '800px',
        opacity: 100,
      }}
      transition={{
        duration: 0.7,
      }}
      className="projects"
    >
      {projects.map((repo) => (
        <motion.div className="project">
          <motion.div>
            <div style={{
              background: repo.primaryLanguage.color,
              height: '30px',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
            }}
            />
            <h2>{repo.name}</h2>
            <h4>{repo.primaryLanguage.name}</h4>
            <p>{repo.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export interface Count {
  totalCount: number;
}

export interface PrimaryLanguage {
  name: string;
  color: string;
}

export interface Repo {
  name: string;
  description: string;
  forks: Count;
  stargazers: Count;
  primaryLanguage: PrimaryLanguage;
}

export default Projects;
