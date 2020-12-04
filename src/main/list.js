import React, {useState} from 'react';
import './main.scss';
import useAxios from 'axios-hooks';
import { Toast , Col, Row } from 'react-bootstrap';
import PillPill from './pill.js';
import {If, Then, Else} from 'react-if';

function Toasty(){

    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const [{ data, loading, error }] = useAxios(
        'https://auth-app-bh.herokuapp.com/api/v1/todo'
        );
        console.log(data);
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    

    return (
            <div className='List' className="Container">
                    <Row>
                        <Col>
                        {
                            console.log(data.results),
                            data.results.map((item) => {
                                return<Toast show={showA} onClose={toggleShowA}>
                                <Toast.Header>
                                    <If condition={item.complete == true}>
                                        <Then>
                                            <PillPill onClick={update} />    
                                        </Then>
                                        <Else>

                                        </Else> 
                                    </If>
                                    <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded mr-2"
                                    alt=""
                                    />
                                    <strong className="mr-auto">{item.assignee}</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>{item.text}</Toast.Body>
                                <Toast.Body>{item.difficulty}</Toast.Body>
                                </Toast>
                            })
                        }
                        </Col>
                    </Row>
            </div>
    );
  }
export default Toasty
