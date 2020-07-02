import React from 'react';
import ReactDom from 'react-dom';
import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-grid-system';

import Skills from './Skills/Skills';
import './Header.css';

export default class Header extends React.Component<any, any> {
    render() {
        return <motion.div className={'header'} animate={'visible'} variants={{
            visible: {
                width: ['10vw', '80vw', '80vw'],
                height: ['7vh', '7vh', '14vh'],
                transition: {
                    duration: 4,
                    times: [.1, .25, .35],
                    ease: 'anticipate',
                    delay: 0.3,
                }
            }
        }}>
            <Container>
                <Row>
                    <Col sm={7}>
                        <motion.h2 className={'headerTitle'} variants={{
                            hidden: {
                                opacity: 0
                            },
                            show: {
                                transition: {
                                    delay: 2,
                                },
                                opacity: 1
                            }
                        }} initial={'hidden'} animate={'show'}>
                            Sammy Hajhamid
                        </motion.h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5}>
                        <Row style={{
                            margin: 0
                        }}>
                            <Skills/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    }
}
