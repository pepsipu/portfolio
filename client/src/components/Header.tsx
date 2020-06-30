import React from 'react';
import ReactDom from 'react-dom';
import { motion } from 'framer-motion';
import './Header.css';

export default class Header extends React.Component<any, any> {
    render() {
        return <motion.div className={'header'} animate={'visible'} variants={{
            visible: {
                width: ['40vw', '80vw', '80vw'],
                height: ['7vh', '7vh', '15vh'],
                transition: {
                    duration: 3,
                    times: [.1, .35, .55],
                    ease: 'anticipate',
                    delay: 0.3,
                    when: 'beforeChildren',
                    staggerChildren: 0.1,
                }
            },
            hidden: {
                opacity: 0,
                transition: {
                    when: "afterChildren",
                },
            },
        }}>
            <motion.h2 className={'headerTitle'}>
                Sammy Hajhamid
            </motion.h2>
        </motion.div>
    }
}
