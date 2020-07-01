import React from 'react';
import ReactDom from 'react-dom';
import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-grid-system';
import './Header.css';

const skills = ['ctf player', 'embedded & os', 'compiler & vm'];

export default class Header extends React.Component<any, any> {
    render() {
        return <motion.div className={'header'} animate={'visible'} variants={{
            visible: {
                width: ['10vw', '80vw', '80vw', '80vw'],
                height: ['7vh', '7vh', '13vh', '20vh'],
                y: [0, 0, 0, -100],
                transition: {
                    duration: 4,
                    times: [.1, .25, .45, .1],
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
                        {skills.map((skill, i) => (
                            <motion.span variants={{
                                hidden: {
                                    y: 70,
                                    opacity: 0
                                },
                                visible: {
                                    transition: {
                                        delay: 3 + i * .4,
                                    },
                                    y: 0,
                                    opacity: 1
                                }
                            }} initial={'hidden'} animate={'visible'} className={'skill'}>
                                {skill}
                            </motion.span>
                        ))}
                    </Col>
                </Row>
            </Container>
        </motion.div>
    }
}
