import React, { useState } from 'react'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import ListCard from './list.js'
import Range from './range'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../header/header'
import Buttons from './buttons.js';
import Toasty from './toasts.js';



function ListForm() {
  const [input, setInput] = useState('');
  console.log(setInput)
  // const renderedResults = results.map((result) => {
  //   return (
  //     <div>

  //     </div>
  //   );
  // });

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <>
      <div class="container-sm">
         <Header />
        <div class="row">
          <div class="col" md="auto">
          <Card body style={{ width: '30rem', height: '30rem' }}>
            
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Oh hey there internet</Form.Label>
                <br />
                <Form.Label className="text-muted">
                  To Do Item
                </Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  placeholder="Item Details"
                  onChange={handleChange}
                  />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  Assigned To
                </Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  placeholder="Assignee Name"
                  onChange={handleChange}
                  />
              </Form.Group>
                <Range />
                <Buttons />
                </Form>
                
            </Card>
          </div>
          <div class="col" md="auto">
           <Toasty />
           <Toasty />
           <Toasty />
           <Toasty />
          </div>
        </div>
      </div>
        
        <span>
          {input}
        </span>
    </>
  )
}

export default ListForm;