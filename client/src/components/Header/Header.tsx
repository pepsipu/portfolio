import React from 'react';
import ReactDom from 'react-dom';
import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-grid-system';

import Skills from './Skills/Skills';
import Nav from './Nav/Nav';
import './Header.css';

export default class Header extends React.Component<HeaderProps, any> {
    render() {
        return <motion.div className={'header'} animate={'visible'} variants={{
            visible: {
                width: ['10vw', '80vw', '80vw'],
                height: ['50px', '50px', '140px'],
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
                    {/* this col holds the name and skill badges */}
                    <Col sm={'content'}>
                        {/* top row (name) */}
                        <Row>
                            <Col>
                                <motion.div className={'headerTitle'} variants={{
                                    hidden: {
                                        y: -7,
                                        opacity: 0
                                    },
                                    show: {
                                        transition: {
                                            delay: 1.8,
                                        },
                                        y: 0,
                                        opacity: 1
                                    }
                                }} initial={'hidden'} animate={'show'}>
                                    Sammy Hajhamid
                                </motion.div>
                            </Col>
                        </Row>
                        {/* bottom row (skill badges) */}
                        <Row>
                            <Col>
                                <Row style={{
                                    margin: 0
                                }}>
                                    <Skills/>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    {/* navbar col */}
                    <Col>
                        <Nav tabSetter={this.props.tabSetter}/>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    }
}

interface HeaderProps {
    tabSetter: any
}
