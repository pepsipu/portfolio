import { motion } from 'framer-motion';
import React from 'react';
import './NavOptions.css';
import { Row, Col } from 'react-grid-system';

const NavOptions = (props: NavOptionsProps) => {
  const { tabSetter, tabs } = props;
  return (
    <motion.div
      className="navOptions"
      initial={{
        width: '0%',
        opacity: 0,
      }}
      animate={{
        width: '100%',
        opacity: 100,
      }}
      transition={{
        delay: 2,
        duration: 1,
      }}
    >
      <Row style={{
        height: '100%',
      }}
      >
        {Object.values(tabs).map(({ displayName, name }, i) => (
          <Col className="navCol">
            <motion.div
              transition={{
                delay: 3 + i * 0.25,
              }}
              initial={{
                opacity: 0,
                y: -7,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              style={{
                width: '100%',
                marginRight: '25px',
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  y: 3,
                }}
                onClick={() => tabSetter(name)}
                className="navOption"
              >
                {displayName}
              </motion.div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

interface NavOptionsProps {
  tabSetter: any
  tabs: TabObject
}

interface TabObject {
  [key: string]: Tab
}

interface Tab {
  displayName: string
  name: string
  component: () => JSX.Element
}

export default NavOptions;
