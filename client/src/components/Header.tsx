import React from 'react';
import ReactDom from 'react-dom';
import { motion } from 'framer-motion';
import './Header.css';

export default class Header extends React.Component<any, any> {
    render() {
        return <motion.div className={'header'} animate={{
            width: ['40vw', '80vw', '80vw'],
            height: ['7vh', '7vh', '20vh'],
        }} transition={{
            duration: 3,
            times: [.1, .35, .55],
            ease: 'anticipate'
        }}>
            <motion.h2 className={'headerTitle'}>
                Sammy Hajhamid
            </motion.h2>
        </motion.div>
    }
}
