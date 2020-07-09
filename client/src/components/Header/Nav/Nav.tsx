import { motion } from 'framer-motion';
import { Row } from 'react-grid-system';
import React from 'react';
import './Nav.css';
import ApiStatus from './ApiStatus/ApiStatus';
import NavOptions from './NavOptions/NavOptions';

const Nav = (props: NavProps) => {
  const { tabSetter, tabs } = props;
  return (
    <motion.div className="nav">
      <Row>
        <ApiStatus />
      </Row>
      <Row>
        <NavOptions tabSetter={tabSetter} tabs={tabs} />
      </Row>
    </motion.div>
  );
};

interface NavProps {
  tabSetter: any
  tabs: any
}

export default Nav;
