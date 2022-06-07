import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='mt-5'>
        <Card className='mt-5 align-items-center p-5 mb-5'>
            <Card className='align-items-center bg-success text-light mt-5' style={{ width: '550px' }}>
                <h2>Efetuar Login</h2>
            </Card>
            <Card className='align-items-center bg-dark text-light mb-5' style={{ width: '550px', height: '20px' }}>
                <p style={{ fontSize: '8pt'}} >Sua Wiki de Deputados</p>
            </Card>

            <Row>
                <Form.Group className='mb-3' controlId="email">
                    <Form.Control type="email" placeholder="E-mail"/>
                </Form.Group>
                <Form.Group className='mb-3' controlId="senha">
                        <Form.Control type="password" placeholder="Senha"/>
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <Link className='btn btn-danger' to={-1}>Voltar</Link>
                </Col>
                <Col>
                    <Link style={{ width: '150px' }} className='btn btn-dark' to={""}>Login</Link>
                </Col>
            </Row>
            </Card>
    </div>
  )
}

export default Login