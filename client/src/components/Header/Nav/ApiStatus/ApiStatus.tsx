import React from 'react';
import ReactDom from 'react-dom';
import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-grid-system';
import './ApiStatus.css';


export default class ApiStatus extends React.Component<any, any> {
    render() {
        return <>
            <Col>
                <motion.div className={'apiLine'}/>
            </Col>
            <Col sm={'content'} className={'api'}>
                <motion.span>api</motion.span>
                <motion.div className={`api${true ? "Online" : "Offline"}`}/>
            </Col>
        </>
    }
}
