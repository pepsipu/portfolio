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
        duration: 0.6,
      }}
      className="projects"
    >
      <p>
        These are just my favorite projects! I have way more on my
        {' '}
        <a href="https://github.com/pepsipu">github</a>
        .
      </p>
      <div className="projectContainer">
        {projects.map((repo, i) => (
          <motion.div
            className="project"
            initial={{
              opacity: 0,
              y: -7,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3 + i * 0.2,
            }}
          >
            <motion.div
              className="projectHover"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => {
                window.location.href = `https://github.com/pepsipu/${repo.name}`;
              }}
            >
              <div style={{
                background: repo.primaryLanguage.color,
                height: '30px',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                borderBottomColor: 'black',
                borderBottomWidth: 'thick',
                borderBottom: 'solid',
              }}
              />
              <h2>{repo.name}</h2>
              <h4>{repo.primaryLanguage.name}</h4>
              <p>{repo.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

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
