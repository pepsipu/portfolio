import {motion} from 'framer-motion';
import {Row, Col} from "react-grid-system";
import React from 'react';
import './ApiStatus/ApiStatus';
import './Nav.css';
import ApiStatus from "./ApiStatus/ApiStatus";

const Nav = () => (
    <motion.div className={'nav'}>
        <Row>
            <ApiStatus/>
        </Row>
    </motion.div>
);

export default Nav;
