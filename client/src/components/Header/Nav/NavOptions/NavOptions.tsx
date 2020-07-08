import {motion} from 'framer-motion';
import React from 'react';
import './NavOptions.css';
import {Row, Col} from "react-grid-system";

const navs = ['about_me', 'ctfs', 'projects'];

const NavOptions = () => {
    return <motion.div className={'navOptions'} initial={{
        width: '0%',
        opacity: 0
    }} animate={{
        width: '100%',
        opacity: 100
    }} transition={{
        delay: 2,
        duration: 1
    }}>
        <Row style={{
            height: '100%'
        }}>
            {navs.map((nav, i) => (
                <Col key={`${i}navcol`} className={'navCol'}>
                    <motion.div key={`${i}nav`} transition={{
                        delay: 3 + i * .25,
                    }} initial={{
                        opacity: 0,
                        y: -7
                    }} animate={{
                        opacity: 1,
                        y: 0,
                    }} style={{
                        width: '100%',
                        marginRight: '25px'
                    }}>
                        <motion.div whileHover={{
                            scale: 1.05
                        }} whileTap={{
                            y: 2
                        }} className={'navOption'}>
                            {nav}
                        </motion.div>
                    </motion.div>
                </Col>
            ))}
        </Row>
    </motion.div>
}

export default NavOptions;
