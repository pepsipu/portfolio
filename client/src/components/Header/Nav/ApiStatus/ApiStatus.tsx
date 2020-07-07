import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { gateway } from '../../../../config.json';
import {motion} from 'framer-motion';
import {Container, Row, Col} from 'react-grid-system';
import './ApiStatus.css';


export default class ApiStatus extends React.Component<any, any> {
    state = {
        // assume online?
        online: true,
    }

    apiError: Error | undefined;

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
                    <motion.div className={`api${this.state.online ? "Online" : "Offline"}`}/>
                </motion.div>
            </Col>
        </>
    }

    constructor(props: Object) {
        super(props);
        axios.get(`${gateway}`, {timeout: 10000}).then((res) => {
            const status: StatusResponse = res.data;
            if (!status.ok) {
                this.apiError = new Error('response from api was bad');
                throw this.apiError;
            }
            this.setState({online: true});
        }).catch((e) => {
            console.log(e);
            this.setState({online: false});
        });
    }
}

interface StatusResponse {
    ok: boolean
}
