import {motion} from 'framer-motion';
import React from 'react';

import './Skills.css';

const skills = ['ctf player', 'embedded & os', 'compiler & vm'];

const Skills = () => (
    <>
        {skills.map((skill, i) => (
            <motion.div key={i} transition={{
                delay: 2.3 + i * .2,
            }} initial={{
                opacity: 0,
                y: 7
            }} animate={{
                opacity: 1,
                y: 0,
            }} className={'skill'}>
                {skill}
            </motion.div>
        ))}
    </>
);

export default Skills;
