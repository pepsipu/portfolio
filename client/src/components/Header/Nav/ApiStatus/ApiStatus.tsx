import React from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Col } from 'react-grid-system';
import { gateway } from '../../../../config.json';
import './ApiStatus.css';

export default class ApiStatus extends React.Component<any, any> {
  // no reason to construct state in consturctor
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // api won't be displayed before the request has completed/timed out so it doesn't really matter
    online: true,
  };

  apiError: Error | undefined;

  constructor(props: Object) {
    super(props);
    axios.get(`${gateway}`, { timeout: 10000 }).then((res) => {
      const status: StatusResponse = res.data;
      if (!status.ok) {
        this.apiError = new Error('response from api was bad');
        throw this.apiError;
      }
      this.setState({ online: true });
    }).catch(() => {
      this.setState({ online: false });
    });
  }

  render() {
    const { online } = this.state;
    return (
      <>
        <Col>
          <motion.div
            initial={{
              width: '0%',
              x: '-50%',
            }}
            animate={{
              width: '100%',
            }}
            transition={{
              delay: 2.7,
              duration: 0.6,
            }}
            className="apiLine"
          />
        </Col>
        <Col sm="content" className="api">
          <motion.div
            variants={{
              hidden: {
                y: 7,
                opacity: 0,
              },
              show: {
                transition: {
                  delay: 3.1,
                  duration: 0.4,
                },
                y: 0,
                opacity: 1,
              },
            }}
            initial="hidden"
            animate="show"
          >
            <motion.span>api</motion.span>
            <motion.div className={`api${online ? 'Online' : 'Offline'}`} />
          </motion.div>
        </Col>
      </>
    );
  }
}

interface StatusResponse {
  ok: boolean
}
