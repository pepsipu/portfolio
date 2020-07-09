import React from "react";
import {motion} from 'framer-motion';
import './AboutMe.css';
import {Col, Container} from "react-grid-system";

const AboutMe = () => {
    return <motion.div initial={{
        height: '0',
        opacity: 0
    }} animate={{
        height: '400px',
        opacity: 100
    }} transition={{
        duration: .7
    }} exit={{
        height: '0'
    }} className={'aboutMe'}>
    </motion.div>
}

export default AboutMe;
