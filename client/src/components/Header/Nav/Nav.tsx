import {motion} from 'framer-motion';
import {Row, Col} from "react-grid-system";
import React from 'react';
import './Nav.css';
import ApiStatus from "./ApiStatus/ApiStatus";
import NavOptions from './NavOptions/NavOptions';

const Nav = (props: NavProps) => (
    <motion.div className={'nav'}>
        <Row>
            <ApiStatus/>
        </Row>
        <Row>
            <NavOptions tabSetter={props.tabSetter}/>
        </Row>
    </motion.div>
);

interface NavProps {
    tabSetter: any
}

export default Nav;
