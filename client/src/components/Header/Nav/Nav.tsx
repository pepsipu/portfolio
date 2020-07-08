import {motion} from 'framer-motion';
import {Row, Col} from "react-grid-system";
import React from 'react';
import './Nav.css';
import ApiStatus from "./ApiStatus/ApiStatus";
import NavOptions from './NavOptions/NavOptions';

const Nav = () => (
    <motion.div className={'nav'}>
        <Row>
            <ApiStatus/>
        </Row>
        <Row>
            <NavOptions/>
        </Row>
    </motion.div>
);

export default Nav;
