import React from 'react';
import ReactDom from 'react-dom';
import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-grid-system';
import './ApiStatus.css';


export default class ApiStatus extends React.Component<any, any> {
    render() {
        return <>
            <Col>
                <motion.div initial={{
                    width: "0%",
                    x: "-50%"
                }} animate={{
                    width: "100%",
                }} transition={{
                    delay: 2.7,
                    duration: .6
                }} className={'apiLine'}/>
            </Col>
            <Col sm={'content'} className={'api'}>
                <motion.div  variants={{
                    hidden: {
                        y: 7,
                        opacity: 0
                    },
                    show: {
                        transition: {
                            delay: 3.1,
                            duration: .4
                        },
                        y: 0,
                        opacity: 1
                    }
                }} initial={'hidden'} animate={'show'}>
                    <motion.span>api</motion.span>
                    <motion.div className={`api${true ? "Online" : "Offline"}`}/>
                </motion.div>
            </Col>
        </>
    }
}
